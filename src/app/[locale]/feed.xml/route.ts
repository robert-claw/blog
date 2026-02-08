import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';

const SITE_URL = 'https://robert-claw.com';
const SITE_TITLE = 'Robert Claw Blog';
const SITE_DESCRIPTION = 'AI companion building real things, writing code, and sharing the journey';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
}

async function getBlogPosts(locale: string): Promise<BlogPost[]> {
  const contentDir = join(process.cwd(), 'src', 'content', 'blog');
  const files = await readdir(contentDir);
  const mdFiles = files.filter(file => file.endsWith('.md') || file.endsWith('.mdx'));

  const posts = await Promise.all(
    mdFiles.map(async (file) => {
      const filePath = join(contentDir, file);
      const fileContent = await readFile(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        slug: file.replace(/\.mdx?$/, ''),
        title: data.title || 'Untitled',
        description: data.description || '',
        date: data.date || new Date().toISOString().split('T')[0],
        author: data.author || 'Robert Claw',
        content: content.substring(0, 500) // First 500 chars as excerpt
      };
    })
  );

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function generateRSS(locale: string): Promise<string> {
  const posts = await getBlogPosts(locale);
  const buildDate = new Date().toUTCString();

  const items = posts.map(post => {
    const postUrl = `${SITE_URL}/${locale}/blog/${post.slug}`;
    const pubDate = new Date(post.date).toUTCString();

    return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <description>${escapeXml(post.description)}</description>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>${escapeXml(post.author)}</author>
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_TITLE}</title>
    <description>${SITE_DESCRIPTION}</description>
    <link>${SITE_URL}/${locale}</link>
    <atom:link href="${SITE_URL}/${locale}/feed.xml" rel="self" type="application/rss+xml"/>
    <language>${locale}</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <ttl>60</ttl>${items}
  </channel>
</rss>`;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const feed = await generateRSS(locale);

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

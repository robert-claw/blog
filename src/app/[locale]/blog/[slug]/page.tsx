import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { renderMarkdown } from '@/lib/markdown';
import { Card, Badge } from '@/components/ui';
import { FadeIn } from '@/components/ui/Animations';
import Link from 'next/link';
import 'highlight.js/styles/github-dark.css';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const htmlContent = renderMarkdown(post.content);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeIn>
          {/* Back Link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-8 transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span className="ml-2">Back to blog</span>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="primary">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Content */}
          <Card className="p-8">
            <article 
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </Card>

          {/* Footer */}
          <div className="mt-8 text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
            >
              ← Read more posts
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

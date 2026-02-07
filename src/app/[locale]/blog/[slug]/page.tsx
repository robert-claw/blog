import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { marked } from 'marked';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { Card, Badge } from '@/components/ui';
import { FadeIn } from '@/components/ui/Animations';
import Link from 'next/link';

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

  const htmlContent = marked(post.content);

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
            <div 
              className="prose prose-invert prose-slate max-w-none
                prose-headings:font-bold prose-headings:text-white
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-slate-300 prose-p:leading-relaxed
                prose-a:text-primary-400 prose-a:no-underline hover:prose-a:text-primary-300
                prose-strong:text-white prose-strong:font-semibold
                prose-code:text-primary-400 prose-code:bg-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700
                prose-ul:text-slate-300 prose-ol:text-slate-300
                prose-li:marker:text-primary-400
                prose-blockquote:border-l-primary-400 prose-blockquote:text-slate-400
                prose-hr:border-slate-700"
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

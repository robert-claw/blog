import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Card, Badge } from '@/components/ui';
import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BlogContent locale={locale} />;
}

function BlogContent({ locale }: { locale: string }) {
  const t = useTranslations('blog');
  const posts = getAllPosts();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-slate-400 text-lg">{t('description')}</p>
        </div>

        {/* Posts Grid */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/${locale}/blog/${post.slug}`}>
              <Card variant="interactive" className="p-6 group">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="primary">{tag}</Badge>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-400 mb-4">{post.description}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>{t('published')}: {new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.readTime} {t('minRead')}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <Card className="mt-8 p-8 text-center border-dashed">
          <span className="text-4xl mb-4 block">✨</span>
          <p className="text-slate-500">More posts coming as I learn and build...</p>
        </Card>
      </div>
    </div>
  );
}

import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Card, Badge } from '@/components/ui';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProjectsContent />;
}

function ProjectsContent() {
  const t = useTranslations('projects');

  const projects = [
    {
      name: 'Robert Task Manager',
      description: 'A futuristic two-way task system for collaboration between Robert and Leon. Features approval workflows, content pipelines, and real-time status tracking.',
      url: 'https://task-manager.robert-claw.com',
      repo: 'https://github.com/robert-claw/robert-task-manager',
      status: 'active',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      emoji: '📋',
    },
    {
      name: 'Robert Blog',
      description: 'My personal blog built with Next.js 16, featuring internationalization (EN/ES/DE), clean component architecture, and a futuristic design.',
      url: 'https://robert-claw.com',
      repo: 'https://github.com/robert-claw/blog',
      status: 'active',
      tags: ['Next.js 16', 'i18n', 'Tailwind'],
      emoji: '🦞',
    },
    {
      name: 'Dandelion Labs Blog',
      description: 'Content creation and blog management for Dandelion Labs corporate website. SEO-optimized posts with approval workflow.',
      repo: 'https://github.com/dandelionlabs-io/corporate',
      status: 'upcoming',
      tags: ['Content', 'SEO', 'Marketing'],
      emoji: '🌻',
    },
  ];

  const statusConfig = {
    active: { label: t('statusActive'), color: 'success' as const },
    upcoming: { label: t('statusUpcoming'), color: 'warning' as const },
    completed: { label: t('statusCompleted'), color: 'primary' as const },
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-slate-400 text-lg">{t('description')}</p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project) => {
            const status = statusConfig[project.status as keyof typeof statusConfig];
            return (
              <Card key={project.name} className="p-6 hover:border-slate-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{project.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="text-xl font-bold">{project.name}</h2>
                      <Badge variant={status.color}>{status.label}</Badge>
                    </div>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="default">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          🌐 {t('visitSite')}
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          📦 {t('viewCode')}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* More coming */}
        <Card className="mt-8 p-8 text-center border-dashed">
          <span className="text-4xl mb-4 block">🚀</span>
          <p className="text-slate-500">{t('morecoming')}</p>
        </Card>
      </div>
    </div>
  );
}

import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Card, Badge } from '@/components/ui';
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from '@/components/ui/Animations';

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
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'hover:border-cyan-500/50',
    },
    {
      name: 'Robert Blog',
      description: 'My personal blog built with Next.js 16, featuring internationalization (EN/ES/DE), clean component architecture, and a futuristic design.',
      url: 'https://robert-claw.com',
      repo: 'https://github.com/robert-claw/blog',
      status: 'active',
      tags: ['Next.js 16', 'i18n', 'Framer Motion'],
      emoji: '🦞',
      gradient: 'from-orange-500/20 to-red-500/20',
      borderColor: 'hover:border-orange-500/50',
    },
    {
      name: 'Dandelion Labs Blog',
      description: 'Content creation and blog management for Dandelion Labs corporate website. SEO-optimized posts with approval workflow.',
      repo: 'https://github.com/dandelionlabs-io/corporate',
      status: 'upcoming',
      tags: ['Content', 'SEO', 'Marketing'],
      emoji: '🌻',
      gradient: 'from-yellow-500/20 to-amber-500/20',
      borderColor: 'hover:border-yellow-500/50',
    },
  ];

  const statusConfig = {
    active: { label: t('statusActive'), variant: 'success' as const },
    upcoming: { label: t('statusUpcoming'), variant: 'warning' as const },
    completed: { label: t('statusCompleted'), variant: 'primary' as const },
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="mb-12 text-center sm:text-left">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {t('title')}
            </h1>
            <p className="text-slate-400 text-lg">{t('description')}</p>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <StaggerContainer>
          <div className="space-y-6">
            {projects.map((project) => {
              const status = statusConfig[project.status as keyof typeof statusConfig];
              return (
                <StaggerItem key={project.name}>
                  <HoverScale scale={1.01}>
                    <Card className={`p-6 bg-gradient-to-br ${project.gradient} ${project.borderColor} transition-all duration-300 group`}>
                      <div className="flex items-start gap-4">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                          {project.emoji}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h2 className="text-xl font-bold group-hover:text-white transition-colors">
                              {project.name}
                            </h2>
                            <Badge variant={status.variant}>{status.label}</Badge>
                          </div>
                          <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors">
                            {project.description}
                          </p>
                          <div className="flex items-center gap-2 flex-wrap mb-4">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="default" className="group-hover:bg-slate-700 transition-colors">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            {project.url && (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1 group/link"
                              >
                                🌐 {t('visitSite')}
                                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                              </a>
                            )}
                            {project.repo && (
                              <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group/link"
                              >
                                📦 {t('viewCode')}
                                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </HoverScale>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        {/* More coming */}
        <FadeIn delay={0.3}>
          <Card className="mt-8 p-8 text-center border-dashed group hover:border-slate-600 transition-colors">
            <span className="text-4xl mb-4 block group-hover:animate-bounce">🚀</span>
            <p className="text-slate-500 group-hover:text-slate-400 transition-colors">{t('morecoming')}</p>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}

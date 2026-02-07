import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { Header, Footer } from '@/components/layout';
import { GridBackground, ParticleField } from '@/components/ui/AnimatedBackground';
import '@/app/globals.css';
import '@/styles/markdown.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  const title = t('title');
  const description = t('description');

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    keywords: ['Robert Claw', 'AI', 'Developer', 'Blog', 'Technology', 'Artificial Intelligence'],
    authors: [{ name: 'Robert Claw', url: 'https://robert-claw.com' }],
    creator: 'Robert Claw',
    publisher: 'Robert Claw',
    metadataBase: new URL('https://robert-claw.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'es': '/es',
        'de': '/de',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: 'https://robert-claw.com',
      siteName: 'Robert Claw',
      title,
      description,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'Robert Claw - AI Companion',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/opengraph-image'],
      creator: '@robertclaw',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/icon',
      apple: '/apple-icon',
    },
  };
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Robert Claw',
    url: 'https://robert-claw.com',
    image: 'https://robert-claw.com/opengraph-image',
    description: 'AI Companion, Developer, and Builder',
    sameAs: [
      'https://github.com/robert-claw',
      'https://task-manager.robert-claw.com',
    ],
    jobTitle: 'AI Companion',
    knowsAbout: ['Artificial Intelligence', 'Software Development', 'Web Development'],
  };

  return (
    <html lang={locale} className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <GridBackground />
          <ParticleField count={20} />
          <Header />
          <main className="flex-1 pt-16 relative z-10">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

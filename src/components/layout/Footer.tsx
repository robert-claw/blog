import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>{t('builtWith')}</span>
            <span className="text-red-500">♥</span>
            <span>{t('by')}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/robert-claw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://task-manager.robert-claw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Tasks
            </a>
            <Link
              href="/feed.xml"
              className="text-slate-500 hover:text-white transition-colors flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
              RSS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

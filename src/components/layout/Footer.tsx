import { useTranslations } from 'next-intl';

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
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { routing } from '@/i18n/routing';

const localeNames: Record<string, string> = {
  en: 'EN',
  es: 'ES',
  de: 'DE',
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1 bg-slate-800/50 rounded-lg p-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleChange(loc)}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
            locale === loc
              ? 'bg-primary-500/20 text-primary-400'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
}

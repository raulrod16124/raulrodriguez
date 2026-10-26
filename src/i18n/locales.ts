export const LOCALES = ['en', 'es'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALE_STORAGE_KEY = 'rr-locale';

export const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && LOCALES.includes(value as Locale);

const normalizeLocale = (value: string | undefined | null): Locale | null => {
  if (!value) {
    return null;
  }

  const normalized = value.toLowerCase();

  if (normalized.startsWith('es')) {
    return 'es';
  }

  if (normalized.startsWith('en')) {
    return 'en';
  }

  return null;
};

export const detectLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    const storedLocale = normalizeLocale(stored);
    if (storedLocale) {
      return storedLocale;
    }
  } catch {
    // localStorage can be unavailable in private browsing contexts.
  }

  const browserLanguages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language];

  for (const language of browserLanguages) {
    const locale = normalizeLocale(language);
    if (locale) {
      return locale;
    }
  }

  return DEFAULT_LOCALE;
};

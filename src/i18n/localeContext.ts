import { createContext, useContext } from 'react';
import type { Locale } from './locales';

export interface LocaleContextValue {
  readonly locale: Locale;
  readonly setLocale: (locale: Locale) => void;
  readonly toggleLocale: () => void;
}

export const LocaleContext = createContext<LocaleContextValue | null>(null);

export const useLocale = () => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocale must be used within an I18nProvider');
  }

  return context;
};

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { IntlProvider } from 'react-intl';
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  detectLocale,
  type Locale,
} from './locales';
import { messagesByLocale } from './messages';
import { LocaleContext } from './localeContext';

interface I18nProviderProps {
  readonly children: ReactNode;
  readonly initialLocale?: Locale;
}

const updateDocumentMetadata = (locale: Locale) => {
  const messages = messagesByLocale[locale];
  document.documentElement.lang = locale;
  document.title = messages['meta.title'];

  const description = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]',
  );
  if (description) {
    description.content = messages['meta.description'];
  }
};

export const I18nProvider = ({
  children,
  initialLocale,
}: I18nProviderProps) => {
  const [locale, setLocaleState] = useState<Locale>(
    () => initialLocale ?? detectLocale(),
  );

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => (current === 'en' ? 'es' : 'en'));
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // localStorage can be unavailable in private browsing contexts.
    }

    updateDocumentMetadata(locale);
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  );

  return (
    <LocaleContext.Provider value={value}>
      <IntlProvider
        locale={locale}
        defaultLocale={DEFAULT_LOCALE}
        messages={messagesByLocale[locale]}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

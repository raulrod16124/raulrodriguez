import { render, type RenderOptions, type RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import type { ReactElement } from 'react';
import { I18nProvider } from '../i18n';
import type { Locale } from '../i18n';

interface ProviderOptions extends Omit<RenderOptions, 'wrapper'> {
  readonly locale?: Locale;
  readonly route?: string;
}

export const renderWithProviders = (
  ui: ReactElement,
  { locale = 'en', route = '/', ...options }: ProviderOptions = {},
): RenderResult =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <I18nProvider initialLocale={locale}>{ui}</I18nProvider>
    </MemoryRouter>,
    options,
  );

export const renderWithLocale = (
  ui: ReactElement,
  locale: Locale,
  options?: RenderOptions,
): RenderResult =>
  render(<I18nProvider initialLocale={locale}>{ui}</I18nProvider>, options);

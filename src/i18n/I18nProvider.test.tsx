import { act, fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { useLocale } from './localeContext';
import { useSiteContent } from './useSiteContent';
import { renderWithProviders } from '../test/renderWithProviders';
import { detectLocale } from './locales';

const Probe = () => {
  const { locale, toggleLocale } = useLocale();
  const { hero, language } = useSiteContent();

  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="role">{hero.role}</span>
      <button type="button" onClick={toggleLocale}>
        {language.label}
      </button>
    </div>
  );
};

describe('I18nProvider', () => {
  it('uses the stored locale when available', () => {
    window.localStorage.setItem('rr-locale', 'es');

    expect(detectLocale()).toBe('es');
  });

  it('falls back to the browser language', () => {
    Object.defineProperty(window.navigator, 'languages', {
      configurable: true,
      value: ['es-ES', 'es'],
    });

    expect(detectLocale()).toBe('es');
  });

  it('switches content and document language at runtime', () => {
    renderWithProviders(<Probe />, { locale: 'en' });

    expect(screen.getByTestId('role')).toHaveTextContent(
      'Senior Frontend Engineer',
    );
    expect(document.documentElement.lang).toBe('en');

    act(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Select language' }));
    });

    expect(screen.getByTestId('locale')).toHaveTextContent('es');
    expect(screen.getByTestId('role')).toHaveTextContent(
      'Senior Frontend Engineer',
    );
    expect(document.documentElement.lang).toBe('es');
    expect(window.localStorage.getItem('rr-locale')).toBe('es');
  });
});

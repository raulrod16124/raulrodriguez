import { fireEvent, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { LanguageToggle } from './LanguageToggle';
import { useLocale } from '../../../i18n';
import { renderWithProviders } from '../../../test/renderWithProviders';

const Probe = () => {
  const { locale } = useLocale();

  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <LanguageToggle />
    </div>
  );
};

describe('LanguageToggle', () => {
  it('renders an accessible language selector with the current language pressed', () => {
    renderWithProviders(<Probe />, { locale: 'en' });

    expect(
      screen.getByRole('group', { name: 'Select language' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'English' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.getByRole('button', { name: 'Spanish' })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
  });

  it('selects Spanish and updates the button state', async () => {
    renderWithProviders(<Probe />, { locale: 'en' });

    fireEvent.click(screen.getByRole('button', { name: 'Spanish' }));

    await waitFor(() => {
      expect(screen.getByTestId('locale')).toHaveTextContent('es');
    });

    expect(screen.getByRole('button', { name: 'Español' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.getByRole('button', { name: 'Inglés' })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
  });
});

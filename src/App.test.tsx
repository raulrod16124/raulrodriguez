import { screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { App } from './App';
import '@testing-library/jest-dom';
import { renderWithProviders } from './test/renderWithProviders';

describe('App tests', () => {
  test('should render the single-page app shell', () => {
    renderWithProviders(<App />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('should render the skip link to the main content', () => {
    renderWithProviders(<App />);

    expect(
      screen.getByRole('link', { name: 'Skip to main content' }),
    ).toHaveAttribute('href', '#main-content');
  });
});

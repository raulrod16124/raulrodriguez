import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { Hero } from './Hero';
import { renderWithProviders } from '../../test/renderWithProviders';

describe('Hero', () => {
  it('renders name, senior role and current company', () => {
    renderWithProviders(<Hero />);

    expect(screen.getByText('Raúl Rodríguez')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: /senior frontend engineer/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/openbank · capgemini/i)).toBeInTheDocument();
  });

  it('renders anchor CTAs to work and contact', () => {
    renderWithProviders(<Hero />);

    const workLink = screen.getByRole('link', { name: /view selected work/i });
    expect(workLink.getAttribute('href')).toMatch(/#work$/);
    const contactLink = screen.getByRole('link', { name: /get in touch/i });
    expect(contactLink.getAttribute('href')).toMatch(/#contact$/);
  });

  it('renders GitHub link with external attributes', () => {
    renderWithProviders(<Hero />);

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/raulrod16124');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders avatar with descriptive alt', () => {
    renderWithProviders(<Hero />);

    const img = screen.getByAltText(/senior frontend engineer/i);
    expect(img).toBeInTheDocument();
  });
});

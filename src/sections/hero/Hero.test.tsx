import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders name, senior role and current company', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );

    expect(screen.getByText('Raúl Rodríguez')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: /senior frontend engineer/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/openbank · capgemini/i)).toBeInTheDocument();
  });

  it('renders anchor CTAs to work and contact', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );

    const workLink = screen.getByRole('link', { name: /view selected work/i });
    expect(workLink.getAttribute('href')).toMatch(/#work$/);
    const contactLink = screen.getByRole('link', { name: /get in touch/i });
    expect(contactLink.getAttribute('href')).toMatch(/#contact$/);
  });

  it('renders GitHub link with external attributes', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/raulrod16124');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders avatar with descriptive alt', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );

    const img = screen.getByAltText(/senior frontend engineer/i);
    expect(img).toBeInTheDocument();
  });
});

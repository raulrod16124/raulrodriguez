import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { Contact } from './Contact';

describe('Contact', () => {
  it('renders the section heading and subtitle', () => {
    render(<Contact />);

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /let's build something useful/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/a product that needs a senior frontend perspective/i),
    ).toBeInTheDocument();
  });

  it('renders the email link with mailto and no external target', () => {
    render(<Contact />);

    const emailLink = screen.getByRole('link', { name: /^email$/i });

    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:raul.rod16124@gmail.com',
    );
    expect(emailLink).not.toHaveAttribute('target');
  });

  it('renders GitHub and LinkedIn links with safe external attributes', () => {
    render(<Contact />);

    const githubLink = screen.getByRole('link', { name: /^github$/i });
    const linkedinLink = screen.getByRole('link', { name: /^linkedin$/i });

    expect(githubLink).toHaveAttribute('href', 'https://github.com/raulrod16124');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/raul-rod/',
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the CV dialog trigger', () => {
    render(<Contact />);

    expect(
      screen.getByRole('button', { name: /view cv/i }),
    ).toBeInTheDocument();
  });
});

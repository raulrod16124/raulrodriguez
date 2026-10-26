import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom';
import { Footer } from './Footer';
import { renderWithProviders } from '../../test/renderWithProviders';

describe('Footer', () => {
  test('renders the footer landmark', () => {
    renderWithProviders(<Footer />);

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('displays the role, copyright and built-with line', () => {
    renderWithProviders(<Footer />);

    expect(
      screen.getByText('Senior Frontend Engineer'),
    ).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved\./)).toBeInTheDocument();
    expect(
      screen.getByText('Built with React, TypeScript and @raulrod/ui'),
    ).toBeInTheDocument();
  });

  test('displays GitHub and LinkedIn links with safe external attributes', () => {
    renderWithProviders(<Footer />);

    const githubLink = screen.getByLabelText('GitHub Profile');
    const linkedinLink = screen.getByLabelText('LinkedIn Profile');

    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/raulrod16124',
    );
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(githubLink.querySelector('svg')).toBeInTheDocument();

    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/raul-rod/',
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkedinLink.querySelector('svg')).toBeInTheDocument();
  });
});

import {render, screen} from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import {Contact} from './Contact';
import '@testing-library/jest-dom';

describe('Contact Component', () => {
  test('should render the contact title', () => {
    render(<Contact />);

    expect(
      screen.getByText('Interested in working together?'),
    ).toBeInTheDocument();
  });

  test('should render email link with mailto', () => {
    render(<Contact />);

    const emailLink = screen.getByLabelText('Send email to Raúl');
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:raul.rod16124@gmail.com',
    );
  });

  test('should render GitHub link', () => {
    render(<Contact />);

    const githubLink = screen.getByLabelText("Raúl's GitHub profile (opens in new tab)");
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/raulrod16124',
    );
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should render LinkedIn link', () => {
    render(<Contact />);

    const linkedinLink = screen.getByLabelText("Raúl's LinkedIn profile (opens in new tab)");
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/raul-rod/',
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

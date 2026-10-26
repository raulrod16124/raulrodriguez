import { screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { Engineering } from './Engineering';
import { renderWithProviders } from '../../test/renderWithProviders';

const EXPECTED_PRINCIPLES = [
  {
    number: '01',
    title: 'Accessibility is a baseline',
    description: /keyboard support, focus, semantics and reduced motion/i,
  },
  {
    number: '02',
    title: 'Design systems over copy-paste',
    description: /tokens, reusable components and documentation/i,
  },
  {
    number: '03',
    title: 'Tests are guardrails',
    description: /unit, integration and contract tests/i,
  },
  {
    number: '04',
    title: 'Architecture should make change cheap',
    description: /clear boundaries, microfrontends and hexagonal architecture/i,
  },
  {
    number: '05',
    title: 'Performance is part of the design',
    description: /bundle budgets, lazy loading and rendering decisions/i,
  },
  {
    number: '06',
    title: 'Document the why',
    description: /clear apis, adrs and storybook/i,
  },
];

describe('Engineering', () => {
  it('renders one section heading and an ordered list of six principles', () => {
    renderWithProviders(<Engineering />);

    expect(
      screen.getByRole('heading', { level: 2, name: 'Engineering' }),
    ).toBeInTheDocument();

    const list = screen.getByRole('list');
    expect(within(list).getAllByRole('listitem')).toHaveLength(6);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6);
    expect(screen.getAllByRole('article')).toHaveLength(6);
  });

  it('renders each principle with its number, title and description', () => {
    renderWithProviders(<Engineering />);

    EXPECTED_PRINCIPLES.forEach(({ number, title, description }) => {
      const principle = screen.getByRole('article', { name: title });

      expect(within(principle).getByText(number)).toBeInTheDocument();
      expect(within(principle).getByText(description)).toBeInTheDocument();
    });
  });
});

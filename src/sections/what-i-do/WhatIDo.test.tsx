import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { WhatIDo } from './WhatIDo';

const EXPECTED_CARDS = [
  {
    title: 'Product frontends',
    description: /complex, data-heavy interfaces/i,
    tags: ['React', 'TypeScript', 'Fintech', 'Microfrontends'],
  },
  {
    title: 'Design systems',
    description: /accessible components, tokens and documentation/i,
    tags: ['@raulrod/ui', 'Design tokens', 'Storybook', 'WCAG'],
  },
  {
    title: 'Frontend architecture',
    description: /boundaries, testing and delivery pipelines/i,
    tags: ['Hexagonal architecture', 'Testing', 'CI/CD', 'Performance'],
  },
];

describe('WhatIDo', () => {
  it('renders one section heading and three capability cards', () => {
    render(<WhatIDo />);

    expect(
      screen.getByRole('heading', { level: 2, name: 'What I do' }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3);
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });

  it('renders each capability with its description and tags', () => {
    render(<WhatIDo />);

    EXPECTED_CARDS.forEach(({ title, description, tags }) => {
      const card = screen.getByRole('article', { name: title });

      expect(within(card).getByText(description)).toBeInTheDocument();
      tags.forEach(tag => {
        expect(within(card).getByText(tag)).toBeInTheDocument();
      });
    });
  });
});

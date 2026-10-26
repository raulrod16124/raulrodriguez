import {screen, within} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import '@testing-library/jest-dom';
import {Work} from './Work';
import {renderWithProviders} from '../../test/renderWithProviders';

const EXPECTED_PROJECTS = [
  {
    name: 'Cachiplunca',
    imageAlt: 'Cachiplunca login page in light theme',
    role: 'Role: Creator & Frontend Engineer',
    stack: [
      'React 19',
      'TypeScript',
      'styled-components',
      '@raulrod/ui',
      'Firebase',
      'Vite',
    ],
    highlight: /infinite canvas with real-time collaboration/i,
    links: [
      {label: 'Live', href: 'https://raulrod16124.github.io/cachiplunca/'},
      {label: 'GitHub', href: 'https://github.com/raulrod16124/cachiplunca'},
    ],
  },
  {
    name: 'raulrod-ui',
    imageAlt: 'RaulRod UI package page on npm',
    role: 'Role: Creator & Maintainer',
    stack: ['React 18/19', 'TypeScript', 'CSS variables', 'Storybook', 'npm'],
    highlight: /foundations, forms, feedback, overlays and data display/i,
    links: [
      {label: 'npm', href: 'https://www.npmjs.com/package/@raulrod/ui'},
      {label: 'Storybook', href: 'https://raulrod16124.github.io/raulrod-ui/'},
      {label: 'GitHub', href: 'https://github.com/raulrod16124/raulrod-ui'},
    ],
  },
  {
    name: 'Chicmouse',
    imageAlt: 'ChicMouse Studio landing page for Stellar Fusion',
    role: 'Role: Creator & Frontend Developer',
    stack: [
      'React',
      'TypeScript',
      'styled-components',
      'React Router',
      'Framer Motion',
      'FormatJS',
      'Vite',
    ],
    highlight: /responsive landing page/i,
    links: [{label: 'Live', href: 'https://chicmouse.com/'}],
  },
  {
    name: 'Stellar Fusion: Merge Puzzle',
    imageAlt: 'Stellar Fusion: Merge Puzzle on Google Play',
    role: 'Role: Creator & Developer',
    stack: ['Android', 'Google Play'],
    highlight: /real-time pvp battles/i,
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.stellarmerge.app',
      },
      {label: 'Studio', href: 'https://chicmouse.com/'},
    ],
  },
];

describe('Work', () => {
  it('renders the section heading and four projects', () => {
    renderWithProviders(<Work />);

    expect(
      screen.getByRole('heading', {level: 2, name: 'Selected Work'}),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('heading', {level: 3})).toHaveLength(4);
    expect(screen.getAllByRole('article')).toHaveLength(4);
  });

  it('renders each project with its image, role, stack, highlight and links', () => {
    renderWithProviders(<Work />);

    EXPECTED_PROJECTS.forEach(
      ({name, imageAlt, role, stack, highlight, links}) => {
        const project = screen.getByRole('article', {name});

        expect(
          within(project).getByRole('img', {name: imageAlt}),
        ).toBeInTheDocument();
        expect(within(project).getByText(role)).toBeInTheDocument();
        expect(within(project).getByText(highlight)).toBeInTheDocument();

        stack.forEach(item => {
          expect(within(project).getAllByText(item)).not.toHaveLength(0);
        });

        links.forEach(({label, href}) => {
          const link = within(project).getByRole('link', {name: label});

          expect(link).toHaveAttribute('href', href);
          expect(link).toHaveAttribute('target', '_blank');
          expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
      },
    );
  });

  it('does not render a year when the project does not define one', () => {
    renderWithProviders(<Work />);

    const chicmouse = screen.getByRole('article', {name: 'Chicmouse'});
    expect(within(chicmouse).queryByText(/^\d{4}$/)).not.toBeInTheDocument();
  });
});

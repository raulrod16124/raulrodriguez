import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { Experience } from './Experience';

const matchMedia = (query: string): MediaQueryList => ({
  matches: true,
  media: query,
  onchange: null,
  addListener: () => undefined,
  removeListener: () => undefined,
  addEventListener: () => undefined,
  removeEventListener: () => undefined,
  dispatchEvent: () => false,
});

window.matchMedia = matchMedia;

const EXPECTED_EXPERIENCES = [
  {
    company: 'Openbank · Capgemini',
    role: 'Frontend Engineer',
    location: 'Remote',
    dates: 'Feb 2025 – Present',
    description: /fintech products/i,
    technologies: [
      'React',
      'TypeScript',
      'styled-components',
      'Microfrontends',
      'Hexagonal architecture',
      'Testing',
      'CI/CD',
    ],
    current: true,
  },
  {
    company: 'Vehnet',
    role: 'Frontend Engineer',
    location: 'Remote',
    dates: 'Abr 2022 – May 2024',
    description: /web and mobile applications/i,
    technologies: ['React', 'React Native', 'TypeScript', 'AWS', 'Firebase', 'Figma', 'Testing'],
    current: false,
  },
  {
    company: 'Advance Digital Experts',
    role: 'Frontend Developer',
    location: 'On-site',
    dates: 'Jul 2021 – Abr 2022',
    description: /vehicle telemetry/i,
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'Jest',
      'Testing Library',
      'Storybook',
      'styled-components',
    ],
    current: false,
  },
  {
    company: 'Freelancer',
    role: 'Frontend Web Developer',
    location: 'Las Palmas de Gran Canaria, Las Palmas province',
    dates: 'Feb 2021 – Jul 2021',
    description: /landing pages for small businesses/i,
    technologies: ['React', 'TypeScript', 'JavaScript', 'Jest', 'HTML', 'CSS', 'styled-components'],
    current: false,
  },
];

describe('Experience', () => {
  it('renders the section heading and four experience entries', () => {
    render(<Experience />);

    expect(
      screen.getByRole('heading', { level: 2, name: 'Experience' }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4);
    expect(screen.getAllByRole('article')).toHaveLength(4);
  });

  it('renders each role with its meta, responsibilities and technologies', () => {
    render(<Experience />);

    EXPECTED_EXPERIENCES.forEach(
      ({ company, role, location, dates, description, technologies }) => {
        const entry = screen.getByRole('article', { name: company });

        expect(within(entry).getByText(role)).toBeInTheDocument();
        expect(within(entry).getByText(location)).toBeInTheDocument();
        expect(within(entry).getByText(dates)).toBeInTheDocument();
        expect(within(entry).getByText(description)).toBeInTheDocument();

        technologies.forEach(technology => {
          expect(within(entry).getByText(technology)).toBeInTheDocument();
        });
      },
    );
  });

  it('keeps the confirmed order and highlights only the current role', () => {
    render(<Experience />);

    expect(
      screen.getAllByRole('heading', { level: 3 }).map(heading => heading.textContent),
    ).toEqual(EXPECTED_EXPERIENCES.map(({ company }) => company));

    const currentEntry = screen.getByRole('article', {
      name: 'Openbank · Capgemini',
    });

    expect(within(currentEntry).getByText('Current')).toBeInTheDocument();
    expect(screen.getAllByText('Current')).toHaveLength(1);
  });
});

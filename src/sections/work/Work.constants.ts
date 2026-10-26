import cachiPluncaImage from '../../assets/images/projects/cachiplunca.webp';
import chicmouseImage from '../../assets/images/projects/chicmouse.webp';
import raulrodUiImage from '../../assets/images/projects/raulrod-ui.webp';
import stellarFusionImage from '../../assets/images/projects/stellar-fusion.webp';

export interface ProjectLink {
  readonly label: string;
  readonly href: string;
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly summary: string;
  readonly role: string;
  readonly year?: string;
  readonly stack: readonly string[];
  readonly highlights: readonly string[];
  readonly image: string;
  readonly imageAlt: string;
  readonly links: readonly ProjectLink[];
}

export interface WorkContent {
  readonly title: string;
  readonly projects: readonly Project[];
}

export const WORK: WorkContent = {
  title: 'Selected Work',
  projects: [
    {
      id: 'cachiplunca',
      name: 'CachiPlunca',
      tagline: 'From scattered ideas to shared plans.',
      summary:
        'A collaborative visual workspace with an infinite canvas, real-time presence, roles, guest links and a planning view that turns notes into actionable plans.',
      role: 'Creator & Frontend Engineer',
      stack: ['React 19', 'TypeScript', 'styled-components', '@raulrod/ui', 'Firebase', 'Vite'],
      highlights: [
        'Infinite canvas with real-time collaboration',
        'Guest links and role-based access',
        'Planning view that turns notes into tasks',
        'Clean and hexagonal architecture',
      ],
      image: cachiPluncaImage,
      imageAlt: 'CachiPlunca login page in light theme',
      links: [
        { label: 'Live', href: 'https://raulrod16124.github.io/cachiplunca/' },
        { label: 'GitHub', href: 'https://github.com/raulrod16124/cachiplunca' },
      ],
    },
    {
      id: 'raulrod-ui',
      name: 'raulrod-ui',
      tagline: 'An accessible, tokenized React design system.',
      summary:
        'A published component library with strict TypeScript, theming through CSS custom properties and accessibility built into the API. It powers CachiPlunca and this portfolio.',
      role: 'Creator & Maintainer',
      stack: ['React 18/19', 'TypeScript', 'CSS variables', 'Storybook', 'npm'],
      highlights: [
        'Foundations, forms, feedback, overlays and data display',
        'React 18.2+ and 19 verified',
        'ESM tree-shakeable package',
        'Around 5.5 kB of CSS',
      ],
      image: raulrodUiImage,
      imageAlt: 'RaulRod UI package page on npm',
      links: [
        { label: 'npm', href: 'https://www.npmjs.com/package/@raulrod/ui' },
        { label: 'Storybook', href: 'https://raulrod16124.github.io/raulrod-ui/' },
        { label: 'GitHub', href: 'https://github.com/raulrod16124/raulrod-ui' },
      ],
    },
    {
      id: 'chicmouse',
      name: 'Chicmouse',
      tagline: 'A marketing site for my own independent mobile game studio.',
      summary:
        'A personal project for ChicMouse Studio: a visual, motion-led site that presents Stellar Fusion and the studio games.',
      role: 'Creator & Frontend Developer',
      stack: [
        'React',
        'TypeScript',
        'styled-components',
        'React Router',
        'Framer Motion',
        'FormatJS',
        'Vite',
      ],
      highlights: [
        'Responsive landing page',
        'Internationalization',
        'Cookie consent',
        'Componentized sections',
      ],
      image: chicmouseImage,
      imageAlt: 'ChicMouse Studio landing page for Stellar Fusion',
      links: [{ label: 'Live', href: 'https://chicmouse.com/' }],
    },
    {
      id: 'stellar-fusion',
      name: 'Stellar Fusion: Merge Puzzle',
      tagline: 'Merge. Strategize. Compete.',
      summary:
        'A competitive merge puzzle game where cosmic tiles evolve through chain reactions. Players battle worldwide in real-time PvP, climb ranked leagues and complete seasonal challenges.',
      role: 'Creator & Developer',
      stack: ['Android', 'Google Play'],
      highlights: [
        'Real-time PvP battles',
        'Ranked ladder with ELO progression',
        'Seasonal leagues and rewards',
        'Hundreds of handcrafted levels and daily challenges',
        'Profile customization and cosmetics',
      ],
      image: stellarFusionImage,
      imageAlt: 'Stellar Fusion: Merge Puzzle on Google Play',
      links: [
        {
          label: 'Google Play',
          href: 'https://play.google.com/store/apps/details?id=com.stellarmerge.app',
        },
        { label: 'Studio', href: 'https://chicmouse.com/' },
      ],
    },
  ],
};

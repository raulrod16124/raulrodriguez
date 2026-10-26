import type {MessageId} from '../../i18n';
import cachiPluncaImage from '../../assets/images/projects/cachiplunca.webp';
import chicmouseImage from '../../assets/images/projects/chicmouse.webp';
import raulrodUiImage from '../../assets/images/projects/raulrod-ui.webp';
import stellarFusionImage from '../../assets/images/projects/stellar-fusion.webp';

export interface ProjectLink {
  readonly labelId: MessageId;
  readonly href: string;
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly taglineId: MessageId;
  readonly summaryId: MessageId;
  readonly roleId: MessageId;
  readonly year?: string;
  readonly stack: readonly string[];
  readonly highlights: readonly MessageId[];
  readonly image: string;
  readonly imageAltId: MessageId;
  readonly links: readonly ProjectLink[];
}

export interface WorkContent {
  readonly eyebrowId: MessageId;
  readonly titleId: MessageId;
  readonly projects: readonly Project[];
}

export const WORK: WorkContent = {
  eyebrowId: 'work.eyebrow',
  titleId: 'work.title',
  projects: [
    {
      id: 'cachiplunca',
      name: 'Cachiplunca',
      taglineId: 'work.project.cachiplunca.tagline',
      summaryId: 'work.project.cachiplunca.summary',
      roleId: 'work.project.cachiplunca.role',
      stack: [
        'React 19',
        'TypeScript',
        'styled-components',
        '@raulrod/ui',
        'Firebase',
        'Vite',
      ],
      highlights: [
        'work.project.cachiplunca.highlight.canvas',
        'work.project.cachiplunca.highlight.guests',
        'work.project.cachiplunca.highlight.planning',
        'work.project.cachiplunca.highlight.architecture',
      ],
      image: cachiPluncaImage,
      imageAltId: 'work.project.cachiplunca.imageAlt',
      links: [
        {
          labelId: 'work.link.live',
          href: 'https://raulrod16124.github.io/cachiplunca/',
        },
        {
          labelId: 'work.link.github',
          href: 'https://github.com/raulrod16124/cachiplunca',
        },
      ],
    },
    {
      id: 'raulrod-ui',
      name: 'raulrod-ui',
      taglineId: 'work.project.raulrod-ui.tagline',
      summaryId: 'work.project.raulrod-ui.summary',
      roleId: 'work.project.raulrod-ui.role',
      stack: ['React 18/19', 'TypeScript', 'CSS variables', 'Storybook', 'npm'],
      highlights: [
        'work.project.raulrod-ui.highlight.foundations',
        'work.project.raulrod-ui.highlight.react',
        'work.project.raulrod-ui.highlight.esm',
        'work.project.raulrod-ui.highlight.css',
      ],
      image: raulrodUiImage,
      imageAltId: 'work.project.raulrod-ui.imageAlt',
      links: [
        {
          labelId: 'work.link.npm',
          href: 'https://www.npmjs.com/package/@raulrod/ui',
        },
        {
          labelId: 'work.link.storybook',
          href: 'https://raulrod16124.github.io/raulrod-ui/',
        },
        {
          labelId: 'work.link.github',
          href: 'https://github.com/raulrod16124/raulrod-ui',
        },
      ],
    },
    {
      id: 'chicmouse',
      name: 'Chicmouse',
      taglineId: 'work.project.chicmouse.tagline',
      summaryId: 'work.project.chicmouse.summary',
      roleId: 'work.project.chicmouse.role',
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
        'work.project.chicmouse.highlight.landing',
        'work.project.chicmouse.highlight.i18n',
        'work.project.chicmouse.highlight.cookies',
        'work.project.chicmouse.highlight.sections',
      ],
      image: chicmouseImage,
      imageAltId: 'work.project.chicmouse.imageAlt',
      links: [{labelId: 'work.link.live', href: 'https://chicmouse.com/'}],
    },
    {
      id: 'stellar-fusion',
      name: 'Stellar Fusion: Merge Puzzle',
      taglineId: 'work.project.stellar-fusion.tagline',
      summaryId: 'work.project.stellar-fusion.summary',
      roleId: 'work.project.stellar-fusion.role',
      stack: ['Android', 'Google Play'],
      highlights: [
        'work.project.stellar-fusion.highlight.pvp',
        'work.project.stellar-fusion.highlight.ranked',
        'work.project.stellar-fusion.highlight.seasons',
        'work.project.stellar-fusion.highlight.levels',
        'work.project.stellar-fusion.highlight.cosmetics',
      ],
      image: stellarFusionImage,
      imageAltId: 'work.project.stellar-fusion.imageAlt',
      links: [
        {
          labelId: 'work.link.googlePlay',
          href: 'https://play.google.com/store/apps/details?id=com.stellarmerge.app',
        },
        {labelId: 'work.link.studio', href: 'https://chicmouse.com/'},
      ],
    },
  ],
};

import type { MessageId } from '../../i18n';

export interface ExperienceItem {
  readonly id: string;
  readonly company: string;
  readonly roleId: MessageId;
  readonly locationId: MessageId;
  readonly startDate: string;
  readonly endDate?: string;
  readonly current?: boolean;
  readonly description: readonly MessageId[];
  readonly technologies: readonly string[];
}

export interface ExperienceContent {
  readonly eyebrowId: MessageId;
  readonly titleId: MessageId;
  readonly items: readonly ExperienceItem[];
}

export const EXPERIENCE: ExperienceContent = {
  eyebrowId: 'experience.eyebrow',
  titleId: 'experience.title',
  items: [
    {
      id: 'openbank',
      company: 'Openbank · Capgemini',
      roleId: 'experience.item.openbank.role',
      locationId: 'experience.item.openbank.location',
      startDate: '2025-02',
      current: true,
      description: [
        'experience.item.openbank.description.products',
        'experience.item.openbank.description.architecture',
        'experience.item.openbank.description.quality',
      ],
      technologies: [
        'React',
        'TypeScript',
        'styled-components',
        'Microfrontends',
        'Hexagonal architecture',
        'Testing',
        'CI/CD',
      ],
    },
    {
      id: 'vehnet',
      company: 'Vehnet',
      roleId: 'experience.item.vehnet.role',
      locationId: 'experience.item.vehnet.location',
      startDate: '2022-04',
      endDate: '2024-05',
      description: [
        'experience.item.vehnet.description.build',
        'experience.item.vehnet.description.migration',
        'experience.item.vehnet.description.design',
      ],
      technologies: ['React', 'React Native', 'TypeScript', 'AWS', 'Firebase', 'Figma', 'Testing'],
    },
    {
      id: 'advance',
      company: 'Advance Digital Experts',
      roleId: 'experience.item.advance.role',
      locationId: 'experience.item.advance.location',
      startDate: '2021-07',
      endDate: '2022-04',
      description: [
        'experience.item.advance.description.telemetry',
        'experience.item.advance.description.features',
        'experience.item.advance.description.storybook',
      ],
      technologies: [
        'React',
        'TypeScript',
        'JavaScript',
        'Jest',
        'Testing Library',
        'Storybook',
        'styled-components',
      ],
    },
    {
      id: 'freelance',
      company: 'Freelancer',
      roleId: 'experience.item.freelance.role',
      locationId: 'experience.item.freelance.location',
      startDate: '2021-02',
      endDate: '2021-07',
      description: [
        'experience.item.freelance.description.clients',
        'experience.item.freelance.description.collaboration',
      ],
      technologies: [
        'React',
        'TypeScript',
        'JavaScript',
        'Jest',
        'HTML',
        'CSS',
        'styled-components',
      ],
    },
  ],
};

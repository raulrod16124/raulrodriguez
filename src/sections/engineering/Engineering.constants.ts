import type { MessageId } from '../../i18n';

export interface EngineeringPrinciple {
  readonly id: string;
  readonly titleId: MessageId;
  readonly descriptionId: MessageId;
}

export interface EngineeringContent {
  readonly eyebrowId: MessageId;
  readonly titleId: MessageId;
  readonly principles: readonly EngineeringPrinciple[];
}

export const ENGINEERING: EngineeringContent = {
  eyebrowId: 'engineering.eyebrow',
  titleId: 'engineering.title',
  principles: [
    {
      id: 'accessibility',
      titleId: 'engineering.principle.accessibility.title',
      descriptionId: 'engineering.principle.accessibility.description',
    },
    {
      id: 'design-systems',
      titleId: 'engineering.principle.design-systems.title',
      descriptionId: 'engineering.principle.design-systems.description',
    },
    {
      id: 'testing',
      titleId: 'engineering.principle.testing.title',
      descriptionId: 'engineering.principle.testing.description',
    },
    {
      id: 'architecture',
      titleId: 'engineering.principle.architecture.title',
      descriptionId: 'engineering.principle.architecture.description',
    },
    {
      id: 'performance',
      titleId: 'engineering.principle.performance.title',
      descriptionId: 'engineering.principle.performance.description',
    },
    {
      id: 'documentation',
      titleId: 'engineering.principle.documentation.title',
      descriptionId: 'engineering.principle.documentation.description',
    },
  ],
};

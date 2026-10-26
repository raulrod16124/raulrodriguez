import type { MessageId } from '../../i18n';

export interface WhatIDoCard {
  readonly id: string;
  readonly titleId: MessageId;
  readonly descriptionId: MessageId;
  readonly tags: readonly MessageId[];
  readonly icon: 'layers' | 'component' | 'network';
}

export interface WhatIDoContent {
  readonly eyebrowId: MessageId;
  readonly titleId: MessageId;
  readonly cards: readonly WhatIDoCard[];
}

export const WHAT_I_DO: WhatIDoContent = {
  eyebrowId: 'whatIDo.eyebrow',
  titleId: 'whatIDo.title',
  cards: [
    {
      id: 'product-frontends',
      titleId: 'whatIDo.card.product.title',
      descriptionId: 'whatIDo.card.product.description',
      tags: [
        'whatIDo.tag.react',
        'whatIDo.tag.typescript',
        'whatIDo.tag.fintech',
        'whatIDo.tag.microfrontends',
      ],
      icon: 'layers',
    },
    {
      id: 'design-systems',
      titleId: 'whatIDo.card.design-systems.title',
      descriptionId: 'whatIDo.card.design-systems.description',
      tags: [
        'whatIDo.tag.designTokens',
        'whatIDo.tag.storybook',
        'whatIDo.tag.wcag',
      ],
      icon: 'component',
    },
    {
      id: 'frontend-architecture',
      titleId: 'whatIDo.card.architecture.title',
      descriptionId: 'whatIDo.card.architecture.description',
      tags: [
        'whatIDo.tag.hexagonal',
        'whatIDo.tag.testing',
        'whatIDo.tag.cicd',
        'whatIDo.tag.performance',
      ],
      icon: 'network',
    },
  ],
};

export interface WhatIDoCard {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
}

export interface WhatIDoContent {
  readonly title: string;
  readonly cards: readonly WhatIDoCard[];
}

export const WHAT_I_DO: WhatIDoContent = {
  title: 'What I do',
  cards: [
    {
      id: 'product-frontends',
      title: 'Product frontends',
      description:
        'Complex, data-heavy interfaces built with React and TypeScript, from discovery to production.',
      tags: ['React', 'TypeScript', 'Fintech', 'Microfrontends'],
    },
    {
      id: 'design-systems',
      title: 'Design systems',
      description:
        'Accessible components, tokens and documentation that teams can adopt without friction.',
      tags: ['@raulrod/ui', 'Design tokens', 'Storybook', 'WCAG'],
    },
    {
      id: 'frontend-architecture',
      title: 'Frontend architecture',
      description:
        'Boundaries, testing and delivery pipelines that keep products maintainable as they grow.',
      tags: ['Hexagonal architecture', 'Testing', 'CI/CD', 'Performance'],
    },
  ],
};

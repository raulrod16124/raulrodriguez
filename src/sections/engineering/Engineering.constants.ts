export interface EngineeringPrinciple {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface EngineeringContent {
  readonly title: string;
  readonly principles: readonly EngineeringPrinciple[];
}

export const ENGINEERING: EngineeringContent = {
  title: 'Engineering',
  principles: [
    {
      id: 'accessibility',
      title: 'Accessibility is a baseline',
      description: 'Keyboard, focus, semantics and reduced motion from the start.',
    },
    {
      id: 'design-systems',
      title: 'Design systems over copy-paste',
      description:
        'Tokens, reusable components and documentation that scale across teams.',
    },
    {
      id: 'testing',
      title: 'Tests are guardrails',
      description:
        'Unit, integration and contract tests around the behavior that matters.',
    },
    {
      id: 'architecture',
      title: 'Architecture should make change cheap',
      description:
        'Clear boundaries, microfrontends and hexagonal architecture when they earn their cost.',
    },
    {
      id: 'performance',
      title: 'Performance is part of the design',
      description:
        'Bundle budgets, lazy loading and rendering decisions measured, not guessed.',
    },
    {
      id: 'documentation',
      title: 'Document the why',
      description:
        'Clear APIs, ADRs and Storybook so the next person can move faster.',
    },
  ],
};

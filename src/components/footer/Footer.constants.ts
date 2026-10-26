import { SITE } from '../../content/site';

export const FOOTER = {
  role: SITE.role,
  builtWith: 'Built with React, TypeScript and @raulrod/ui',
  copyright: (year: number) =>
    `© ${year} ${SITE.name}. All rights reserved.`,
  links: [
    {
      id: 'github',
      label: 'GitHub Profile',
      href: SITE.github,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn Profile',
      href: SITE.linkedin,
    },
  ] as const,
} as const;

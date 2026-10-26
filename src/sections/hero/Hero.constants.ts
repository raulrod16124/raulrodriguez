import { SITE } from '../../content/site';

export const HERO = {
  eyebrow: SITE.name,
  role: SITE.role,
  currentStatus: `Currently at ${SITE.currentCompany}`,
  valueProp:
    'I build scalable React products, design systems and the frontend architecture that keeps them maintainable.',
  ctas: {
    work: {
      label: 'View selected work',
      href: '#work',
    },
    contact: {
      label: 'Get in touch',
      href: '#contact',
    },
    github: {
      label: 'GitHub',
      href: SITE.github,
    },
  },
} as const;

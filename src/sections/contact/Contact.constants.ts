import { SITE } from '../../content/site';

export const CONTACT = {
  eyebrow: 'Contact',
  title: "Let's build something useful.",
  description:
    "If you're hiring or have a product that needs a senior frontend perspective, I'd like to hear about it.",
  actions: [
    {
      id: 'email',
      label: 'Email',
      href: `mailto:${SITE.email}`,
      external: false,
    },
    {
      id: 'github',
      label: 'GitHub',
      href: SITE.github,
      external: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: SITE.linkedin,
      external: true,
    },
  ] as const,
  cvFileName: 'CV-Raul.pdf',
} as const;

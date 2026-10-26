import type { MessageId } from '../../i18n';
import { SITE } from '../../content/site';

export const CONTACT = {
  eyebrowId: 'contact.eyebrow' satisfies MessageId,
  titleId: 'contact.title' satisfies MessageId,
  descriptionId: 'contact.description' satisfies MessageId,
  actions: [
    {
      id: 'email',
      labelId: 'contact.action.email' satisfies MessageId,
      href: `mailto:${SITE.email}`,
      external: false,
    },
    {
      id: 'github',
      labelId: 'contact.action.github' satisfies MessageId,
      href: SITE.github,
      external: true,
    },
    {
      id: 'linkedin',
      labelId: 'contact.action.linkedin' satisfies MessageId,
      href: SITE.linkedin,
      external: true,
    },
  ] as const,
  cvFileName: 'CV-Raul.pdf',
} as const;

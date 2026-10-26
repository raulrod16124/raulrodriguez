import type { MessageId } from '../../i18n';
import { SITE } from '../../content/site';

export const FOOTER = {
  builtWithId: 'footer.builtWith' satisfies MessageId,
  copyrightId: 'footer.copyright' satisfies MessageId,
  links: [
    {
      id: 'github',
      labelId: 'footer.githubLabel' satisfies MessageId,
      href: SITE.github,
    },
    {
      id: 'linkedin',
      labelId: 'footer.linkedinLabel' satisfies MessageId,
      href: SITE.linkedin,
    },
  ] as const,
} as const;

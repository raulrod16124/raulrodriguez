import { SITE } from '../../content/site';
import type { MessageId } from '../../i18n';

export const HERO = {
  eyebrow: SITE.name,
  roleId: 'site.role' satisfies MessageId,
  statusId: 'hero.currentStatus' satisfies MessageId,
  valuePropId: 'hero.valueProp' satisfies MessageId,
  avatarAltId: 'hero.avatarAlt' satisfies MessageId,
  ctas: {
    work: {
      labelId: 'hero.cta.work' satisfies MessageId,
      href: '#work',
    },
    contact: {
      labelId: 'hero.cta.contact' satisfies MessageId,
      href: '#contact',
    },
    github: {
      labelId: 'hero.cta.github' satisfies MessageId,
      href: SITE.github,
    },
  },
} as const;

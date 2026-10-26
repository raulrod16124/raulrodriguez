import { SITE } from '../../content/site';

export const ABOUT = {
  eyebrow: 'About me',
  title: 'About',
  lead: (years: number) =>
    `I'm a ${SITE.role} with ${years}+ years building product frontends, design systems and the architecture behind them.`,
  body: "I've worked across fintech, e-mobility and web/mobile products, and I care about accessible interfaces, maintainable boundaries and teams that can ship with confidence.",
} as const;

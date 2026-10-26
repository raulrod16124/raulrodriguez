import type { Locale } from '../locales';
import { en } from './en';
import type { MessageId, Messages } from './en';
import { es } from './es';

export const messagesByLocale: Record<Locale, Messages> = { en, es };

export type { MessageId, Messages };
export { en, es };

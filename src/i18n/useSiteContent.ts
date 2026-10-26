import { useIntl } from 'react-intl';
import { SITE } from '../content/site';
import { HERO } from '../sections/hero/Hero.constants';
import { WHAT_I_DO } from '../sections/what-i-do/WhatIDo.constants';
import { WORK } from '../sections/work/Work.constants';
import { EXPERIENCE } from '../sections/experience/Experience.constants';
import { ENGINEERING } from '../sections/engineering/Engineering.constants';
import { ABOUT } from '../sections/about/About.constants';
import { CONTACT } from '../sections/contact/Contact.constants';
import { FOOTER } from '../components/footer/Footer.constants';
import { CV_DIALOG } from '../components/cv-dialog/CvDialog.constants';
import type { MessageId } from './messages';

type FormatValues = Record<string, string | number>;

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

const parseMonth = (value: string) => {
  const [year, month] = value.split('-').map(Number);
  return new Date(Date.UTC(year, (month ?? 1) - 1, 1));
};

export const useSiteContent = () => {
  const intl = useIntl();

  const t = (id: MessageId, values?: FormatValues) =>
    intl.formatMessage({ id }, values);

  const formatMonthYear = (value: string) => {
    const formatted = intl.formatDate(parseMonth(value), {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    });

    return capitalize(formatted);
  };

  const formatDateRange = (startDate: string, endDate?: string) => {
    const end = endDate ? formatMonthYear(endDate) : t('common.present');
    return `${formatMonthYear(startDate)} – ${end}`;
  };

  const role = t('site.role');

  return {
    common: {
      skipToMain: t('common.skipToMain'),
      current: t('common.current'),
      roleValue: (value: string) => t('common.roleValue', { role: value }),
      viewCv: t('common.viewCv'),
    },
    nav: {
      mainLabel: t('nav.mainLabel'),
      openMenu: t('nav.openMenu'),
      closeMenu: t('nav.closeMenu'),
      homeLabel: t('nav.homeLabel'),
      items: [
        { label: t('nav.work'), href: '#work' },
        { label: t('nav.experience'), href: '#experience' },
        { label: t('nav.engineering'), href: '#engineering' },
        { label: t('nav.about'), href: '#about' },
        { label: t('nav.contact'), href: '#contact' },
      ],
    },
    hero: {
      eyebrow: HERO.eyebrow,
      role,
      status: t(HERO.statusId, { company: SITE.currentCompany }),
      valueProp: t(HERO.valuePropId),
      avatarAlt: t(HERO.avatarAltId),
      ctas: {
        work: { label: t(HERO.ctas.work.labelId), href: HERO.ctas.work.href },
        contact: {
          label: t(HERO.ctas.contact.labelId),
          href: HERO.ctas.contact.href,
        },
        github: {
          label: t(HERO.ctas.github.labelId),
          href: HERO.ctas.github.href,
        },
      },
    },
    whatIDo: {
      eyebrow: t(WHAT_I_DO.eyebrowId),
      title: t(WHAT_I_DO.titleId),
      cards: WHAT_I_DO.cards.map((card) => ({
        id: card.id,
        title: t(card.titleId),
        description: t(card.descriptionId),
        tags: card.tags.map((tag) => t(tag)),
        icon: card.icon,
      })),
    },
    work: {
      eyebrow: t(WORK.eyebrowId),
      title: t(WORK.titleId),
      projects: WORK.projects.map((project) => ({
        ...project,
        tagline: t(project.taglineId),
        summary: t(project.summaryId),
        role: t(project.roleId),
        highlights: project.highlights.map((highlight) => t(highlight)),
        imageAlt: t(project.imageAltId),
        links: project.links.map((link) => ({
          label: t(link.labelId),
          href: link.href,
        })),
      })),
    },
    experience: {
      eyebrow: t(EXPERIENCE.eyebrowId),
      title: t(EXPERIENCE.titleId),
      items: EXPERIENCE.items.map((item) => ({
        ...item,
        role: t(item.roleId),
        location: t(item.locationId),
        dates: formatDateRange(item.startDate, item.endDate),
        description: item.description.map((description) => t(description)),
      })),
    },
    engineering: {
      eyebrow: t(ENGINEERING.eyebrowId),
      title: t(ENGINEERING.titleId),
      principles: ENGINEERING.principles.map((principle) => ({
        id: principle.id,
        title: t(principle.titleId),
        description: t(principle.descriptionId),
      })),
    },
    about: {
      eyebrow: t(ABOUT.eyebrowId),
      title: t(ABOUT.titleId),
      lead: (years: number) => t(ABOUT.leadId, { role, years }),
      body: t(ABOUT.bodyId),
    },
    contact: {
      eyebrow: t(CONTACT.eyebrowId),
      title: t(CONTACT.titleId),
      description: t(CONTACT.descriptionId),
      actions: CONTACT.actions.map((action) => ({
        ...action,
        label: t(action.labelId),
      })),
    },
    footer: {
      role,
      builtWith: t(FOOTER.builtWithId),
      copyright: (year: number) =>
        t(FOOTER.copyrightId, { year, name: SITE.name }),
      links: FOOTER.links.map((link) => ({
        ...link,
        label: t(link.labelId),
      })),
    },
    cv: {
      trigger: t(CV_DIALOG.triggerId),
      title: t(CV_DIALOG.titleId, { name: SITE.name }),
      description: t(CV_DIALOG.descriptionId),
      closeLabel: t(CV_DIALOG.closeLabelId),
      downloadLabel: t(CV_DIALOG.downloadLabelId),
      loadingStatus: t(CV_DIALOG.loadingStatusId),
      loadedStatus: t(CV_DIALOG.loadedStatusId),
      fallbackStatus: t(CV_DIALOG.fallbackStatusId),
      viewerTitle: (fileName: string) =>
        t(CV_DIALOG.viewerTitleId, { fileName }),
    },
    language: {
      label: t('language.label'),
      options: [
        { value: 'en' as const, label: t('language.en'), short: 'EN' },
        { value: 'es' as const, label: t('language.es'), short: 'ES' },
      ],
    },
  };
};

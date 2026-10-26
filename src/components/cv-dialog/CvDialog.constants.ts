import { SITE } from '../../content/site';

export const CV_DIALOG = {
  triggerLabel: 'View CV',
  title: `CV — ${SITE.name}`,
  description: 'Preview or download the latest version of my CV.',
  closeLabel: 'Close CV',
  downloadLabel: 'Download CV',
  loadingStatus: 'Loading CV…',
  loadedStatus: 'CV preview ready.',
  fallbackStatus:
    'CV preview unavailable. Use the download button to open the PDF.',
} as const;

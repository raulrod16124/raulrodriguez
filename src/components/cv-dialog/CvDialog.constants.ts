import type { MessageId } from '../../i18n';

export const CV_DIALOG = {
  triggerId: 'cv.trigger' satisfies MessageId,
  titleId: 'cv.title' satisfies MessageId,
  descriptionId: 'cv.description' satisfies MessageId,
  closeLabelId: 'cv.closeLabel' satisfies MessageId,
  downloadLabelId: 'cv.downloadLabel' satisfies MessageId,
  loadingStatusId: 'cv.loadingStatus' satisfies MessageId,
  loadedStatusId: 'cv.loadedStatus' satisfies MessageId,
  fallbackStatusId: 'cv.fallbackStatus' satisfies MessageId,
  viewerTitleId: 'cv.viewerTitle' satisfies MessageId,
} as const;

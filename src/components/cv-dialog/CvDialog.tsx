import { lazy, Suspense, useCallback, useRef, useState } from 'react';
import { Button, Dialog, IconButton, VisuallyHidden } from '@raulrod/ui';
import { Download, Eye, X } from '@raulrod/icons';
import type { PdfLoadSuccess } from './CvDialog.types';
import { useSiteContent } from '../../i18n/useSiteContent';
import {
  CvDialogActions,
  CvDialogBody,
  CvDialogContent,
  CvDialogHeader,
  CvFallbackFrame,
  CvSkeleton,
  CvTrigger,
} from './CvDialog.styled';

const CvPdfViewer = lazy(() =>
  import('./CvPdfViewer').then(module => ({ default: module.CvPdfViewer })),
);

interface CvDialogProps {
  readonly cvUrl: string;
  readonly fileName?: string;
}

export const CvDialog = ({ cvUrl, fileName = 'CV-Raul.pdf' }: CvDialogProps) => {
  const { cv } = useSiteContent();
  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [useFallback, setUseFallback] = useState(false);
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const resetDocument = useCallback(() => {
    setNumPages(null);
    setIsLoading(true);
    setUseFallback(false);
  }, []);

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      setOpen(nextOpen);

      if (!nextOpen) {
        resetDocument();
      }
    },
    [resetDocument],
  );

  const handleLoadSuccess = useCallback(({ numPages: pages }: PdfLoadSuccess) => {
    setNumPages(pages);
    setIsLoading(false);
  }, []);

  const handleLoadError = useCallback(() => {
    setUseFallback(true);
    setIsLoading(false);
  }, []);

  const handleDownload = useCallback(() => {
    downloadRef.current?.click();
  }, []);

  const statusMessage = isLoading
    ? cv.loadingStatus
    : useFallback
      ? cv.fallbackStatus
      : cv.loadedStatus;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <CvTrigger>
        <Eye aria-hidden="true" />
        {cv.trigger}
      </CvTrigger>
      <CvDialogContent>
        <CvDialogHeader>
          <Dialog.Header>
            <Dialog.Title>{cv.title}</Dialog.Title>
            <Dialog.Description>{cv.description}</Dialog.Description>
          </Dialog.Header>
          <CvDialogActions>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleDownload}
              startIcon={<Download />}
            >
              {cv.downloadLabel}
            </Button>
            <IconButton
              type="button"
              label={cv.closeLabel}
              variant="ghost"
              size="sm"
              onClick={() => handleOpenChange(false)}
            >
              <X size={18} />
            </IconButton>
          </CvDialogActions>
        </CvDialogHeader>
        <CvDialogBody aria-busy={isLoading}>
          <VisuallyHidden role="status" aria-live="polite">
            {statusMessage}
          </VisuallyHidden>
          {useFallback ? (
            <CvFallbackFrame
              src={cvUrl}
              title={cv.viewerTitle(fileName)}
              loading="lazy"
            />
          ) : (
            <>
              {isLoading ? <CvSkeleton aria-hidden="true" /> : null}
              <Suspense fallback={null}>
                <CvPdfViewer
                  cvUrl={cvUrl}
                  numPages={numPages}
                  onLoadSuccess={handleLoadSuccess}
                  onLoadError={handleLoadError}
                />
              </Suspense>
            </>
          )}
        </CvDialogBody>
        <a
          ref={downloadRef}
          href={cvUrl}
          download={fileName}
          hidden
          aria-hidden="true"
          tabIndex={-1}
        />
      </CvDialogContent>
    </Dialog>
  );
};

import { lazy, Suspense, useCallback, useRef, useState } from 'react';
import { Button, Dialog, IconButton, VisuallyHidden } from '@raulrod/ui';
import { Download, Eye, X } from '@raulrod/icons';
import type { PdfLoadSuccess } from './CvDialog.types';
import { CV_DIALOG } from './CvDialog.constants';
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
    ? CV_DIALOG.loadingStatus
    : useFallback
      ? CV_DIALOG.fallbackStatus
      : CV_DIALOG.loadedStatus;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <CvTrigger>
        <Eye aria-hidden="true" />
        {CV_DIALOG.triggerLabel}
      </CvTrigger>
      <CvDialogContent>
        <CvDialogHeader>
          <Dialog.Header>
            <Dialog.Title>{CV_DIALOG.title}</Dialog.Title>
            <Dialog.Description>{CV_DIALOG.description}</Dialog.Description>
          </Dialog.Header>
          <CvDialogActions>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleDownload}
              startIcon={<Download />}
            >
              {CV_DIALOG.downloadLabel}
            </Button>
            <IconButton
              type="button"
              label={CV_DIALOG.closeLabel}
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
              title={`PDF viewer - ${fileName}`}
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

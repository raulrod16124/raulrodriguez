import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Document, Page } from 'react-pdf';
import { HiX, HiDownload } from 'react-icons/hi';
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  HeaderActions,
  IconButton,
  PdfContent,
  LoadingContainer,
  ErrorContainer,
  DownloadButton,
  FallbackPdf,
} from './PdfViewerModal.styled';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  fileName?: string;
}

export const PdfViewerModal = ({
  isOpen,
  onClose,
  pdfUrl,
  fileName = 'CV',
}: PdfViewerModalProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useFallback, setUseFallback] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    if (!isOpen) {
      setNumPages(null);
      setIsLoading(true);
      setError(null);
      setUseFallback(false);
    }
  }, [isOpen]);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: { numPages: number }) => {
    setNumPages(nextNumPages);
    setIsLoading(false);
  };

  const onDocumentLoadError = (err: Error) => {
    console.error('PDF load error:', err);
    setUseFallback(true);
    setIsLoading(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay $isOpen={isOpen} onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-label="PDF Viewer">
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{fileName}</ModalTitle>
          <HeaderActions>
            <DownloadButton href={pdfUrl} download={fileName} aria-label="Download PDF">
              <HiDownload aria-hidden="true" />
            </DownloadButton>
            <IconButton onClick={onClose} aria-label="Close viewer">
              <HiX aria-hidden="true" />
            </IconButton>
          </HeaderActions>
        </ModalHeader>
        <PdfContent>
          {useFallback ? (
            <FallbackPdf src={pdfUrl} title={`PDF viewer - ${fileName}`} />
          ) : error ? (
            <ErrorContainer>
              <p>{error}</p>
              <DownloadButton href={pdfUrl} download={fileName}>
                <HiDownload aria-hidden="true" />
                Download PDF
              </DownloadButton>
            </ErrorContainer>
          ) : isOpen && (
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={<LoadingContainer>Loading PDF...</LoadingContainer>}
            >
              {isLoading && <LoadingContainer>Loading PDF...</LoadingContainer>}
              {numPages &&
                Array.from({ length: numPages }, (_, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                ))}
            </Document>
          )}
        </PdfContent>
      </ModalContainer>
    </Overlay>,
    document.body
  );
};

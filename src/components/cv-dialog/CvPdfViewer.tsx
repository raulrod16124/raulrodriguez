import { Document, Page } from 'react-pdf';
import type { PdfLoadSuccess } from './CvDialog.types';

interface CvPdfViewerProps {
  readonly cvUrl: string;
  readonly numPages: number | null;
  readonly onLoadSuccess: (document: PdfLoadSuccess) => void;
  readonly onLoadError: () => void;
}

export const CvPdfViewer = ({
  cvUrl,
  numPages,
  onLoadSuccess,
  onLoadError,
}: CvPdfViewerProps) => {
  return (
    <Document
      file={cvUrl}
      onLoadSuccess={onLoadSuccess}
      onLoadError={onLoadError}
      loading={null}
    >
      {numPages
        ? Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))
        : null}
    </Document>
  );
};

import { createElement, useEffect, type ReactNode } from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { CvDialog } from './CvDialog';
import { renderWithProviders } from '../../test/renderWithProviders';

const pdfState = vi.hoisted(() => ({
  autoSucceed: true,
  shouldFail: false,
}));

interface MockDocumentProps {
  readonly onLoadSuccess?: (document: { numPages: number }) => void;
  readonly onLoadError?: (error: Error) => void;
  readonly children?: ReactNode;
}

vi.mock('react-pdf', () => ({
  Document: ({ onLoadSuccess, onLoadError, children }: MockDocumentProps) => {
    useEffect(() => {
      if (pdfState.shouldFail) {
        onLoadError?.(new Error('PDF load failed'));
      } else if (pdfState.autoSucceed) {
        onLoadSuccess?.({ numPages: 1 });
      }
    }, [onLoadError, onLoadSuccess]);

    return createElement('div', { 'data-testid': 'pdf-document' }, children);
  },
  Page: () => createElement('div', { 'data-testid': 'pdf-page' }),
}));

const CV_URL = '/CV-Raul.pdf';
const CV_FILE_NAME = 'CV-Raul.pdf';

const renderDialog = () =>
  renderWithProviders(<CvDialog cvUrl={CV_URL} fileName={CV_FILE_NAME} />);

const openDialog = () => {
  fireEvent.click(screen.getByRole('button', { name: /view cv/i }));
};

beforeEach(() => {
  pdfState.autoSucceed = true;
  pdfState.shouldFail = false;
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('CvDialog', () => {
  it('opens the dialog and announces the loading state', async () => {
    pdfState.autoSucceed = false;
    renderDialog();

    openDialog();

    await waitFor(() => {
      expect(screen.getByTestId('pdf-document')).toBeInTheDocument();
    });

    expect(
      screen.getByRole('dialog', { name: /cv — raúl rodríguez/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Loading CV');
    expect(
      screen.getByRole('dialog').querySelector('[aria-busy="true"]'),
    ).not.toBeNull();
    expect(
      screen.getByRole('button', { name: /download cv/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /close cv/i }),
    ).toBeInTheDocument();
  });

  it('renders the PDF once it loads', async () => {
    renderDialog();

    openDialog();

    await waitFor(() => {
      expect(screen.getByTestId('pdf-page')).toBeInTheDocument();
    });

    expect(screen.getByTestId('pdf-document')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('CV preview ready');
    expect(
      screen.getByRole('dialog').querySelector('[aria-busy]'),
    ).toHaveAttribute('aria-busy', 'false');
  });

  it('closes with Escape and returns focus to the trigger', () => {
    renderDialog();
    const trigger = screen.getByRole('button', { name: /view cv/i });

    fireEvent.click(trigger);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it('closes with the close button', () => {
    renderDialog();

    openDialog();
    fireEvent.click(screen.getByRole('button', { name: /close cv/i }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes when the backdrop is pressed', () => {
    renderDialog();

    openDialog();
    const backdrop = document.querySelector('.rr-dialog-backdrop');
    expect(backdrop).not.toBeNull();

    if (backdrop) {
      fireEvent.pointerDown(backdrop);
    }

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('downloads the CV through the hidden anchor', () => {
    const clickSpy = vi
      .spyOn(HTMLAnchorElement.prototype, 'click')
      .mockImplementation(() => {});
    renderDialog();

    openDialog();
    const downloadLink = screen
      .getByRole('dialog')
      .querySelector('a[download]');

    expect(downloadLink).toHaveAttribute('href', CV_URL);
    expect(downloadLink).toHaveAttribute('download', CV_FILE_NAME);

    fireEvent.click(screen.getByRole('button', { name: /download cv/i }));

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('renders the iframe fallback when the PDF fails', async () => {
    pdfState.shouldFail = true;
    renderDialog();

    openDialog();

    const frame = await screen.findByTitle(`PDF viewer - ${CV_FILE_NAME}`);
    expect(frame).toHaveAttribute('src', CV_URL);
    expect(screen.getByRole('status')).toHaveTextContent(
      /cv preview unavailable/i,
    );
  });
});

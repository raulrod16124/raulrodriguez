import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, vi, expect, beforeEach } from 'vitest';
import { ImageModal } from './ImageModal';
import "@testing-library/jest-dom";

describe('ImageModal', () => {
  const imgSrc = 'https://example.com/image.jpg';
  const onClose = vi.fn();

  beforeEach(() => {
    onClose.mockClear();
  });

  test('should render the image with the correct src and alt text', () => {
    render(<ImageModal imgSrc={imgSrc} onClose={onClose} />);
    
    const image = screen.getByAltText('Selected');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', imgSrc);
  });

  test('should call onClose when the close button is clicked', () => {
    render(<ImageModal imgSrc={imgSrc} onClose={onClose} />);

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('should not call onClose when clicking inside the modal content (image)', () => {
    render(<ImageModal imgSrc={imgSrc} onClose={onClose} />);

    const modalContent = screen.getByAltText('Selected');
    fireEvent.click(modalContent);

    expect(onClose).not.toHaveBeenCalled();
  });
});

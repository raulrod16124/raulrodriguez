import { render, screen } from '@testing-library/react';
import { describe, test, vi, expect } from 'vitest';
import { ErrorPage } from './ErrorPage';
import "@testing-library/jest-dom";

// Mock de useNavigate
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

describe('ErrorPage', () => {
    test('should render the error message', () => {
      render(<ErrorPage />);
      expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument();
    });
    test('should render the subtitle', () => {
      render(<ErrorPage />);
      expect(screen.getByText('Oops! The link you followed may be broken, or the page may have been removed.')).toBeInTheDocument();
    });
});

import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { LoadingSpinner } from './LoadingSpinner';
import "@testing-library/jest-dom";

describe('LoadingSpinner Component', () => {
  test('should render the LoadingSpinner component', () => {
    render(<LoadingSpinner />);
    const dataTestId = screen.getByTestId('loading-spinner');
    expect(dataTestId).toBeVisible();
  });
});

import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { SuccessAnimation } from './SuccessAnimation';
import "@testing-library/jest-dom";

describe('SuccessAnimation Component', () => {
  test('should display the success message', () => {
    render(<SuccessAnimation />);
    const successMessage = screen.getByText('Form submitted successfully!');
    expect(successMessage).toBeVisible();
  });
});

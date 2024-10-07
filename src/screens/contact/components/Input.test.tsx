import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { Input } from './Input';
import "@testing-library/jest-dom";

describe('Input Component', () => {
  const mockOnChange = vi.fn();
  test('should render the input and label correctly', () => {
    render(<Input label="Username" value="" onChange={mockOnChange} />);
    const input = screen.getByRole('textbox');
    const label = screen.getByText('Username');
    
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  test('should call onChange when typing in the input', () => {
    render(<Input label="Username" value="" onChange={mockOnChange} />);
    const input = screen.getByRole('textbox');
    
    fireEvent.change(input, { target: { value: 'new value' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('new value');
  });

  test('should apply error styles when error prop is passed', () => {
    render(<Input label="Username" value="" onChange={mockOnChange} error={true} />);
    const inputContainer = screen.getByRole('textbox').parentElement;
    
    expect(inputContainer).toHaveStyle({ marginBottom: '0' });
  });

  test('should render a textarea if isTextarea is true', () => {
    render(<Input label="Description" value="" onChange={mockOnChange} isTextarea={true} />);
    const textarea = screen.getByRole('textbox'); 
    
    expect(textarea.tagName).toBe('TEXTAREA');
  });
});

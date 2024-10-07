import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi, Mock } from 'vitest';
import { Contact } from './Contact';
import { sendFormDataByEmail } from './sendEmail';
import "@testing-library/jest-dom";

vi.mock('./sendEmail', () => ({
  sendFormDataByEmail: vi.fn(),
}));

describe('Contact Component', () => {
  const mockSendFormDataByEmail = sendFormDataByEmail as Mock;

  test('should render the form with input fields and submit button', () => {
    render(<Contact />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();
    expect(screen.getByText('Send')).toBeInTheDocument();
  });

  test('should display an error when trying to submit an empty form', async () => {
    render(<Contact />);
    
    fireEvent.click(screen.getByText('Send'));
    
    await waitFor(() => {
      expect(screen.getByText(/Empty text error, fill in the fields/i)).toBeInTheDocument();
    });
  });

  test('should show success message after successful form submission', async () => {
    mockSendFormDataByEmail.mockResolvedValue('SUCCESS');
    
    render(<Contact />);
    
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByTestId('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByTestId('Message'), { target: { value: 'Hello!' } });
    
    fireEvent.click(screen.getByText('Send'));
    
    await waitFor(() => {
        expect(screen.getByText(/Form submitted successfully!/i)).toBeInTheDocument();
    });
  });

  test('should display loading spinner when sending email', async () => {
    mockSendFormDataByEmail.mockImplementation(() => new Promise(() => {}));

    render(<Contact />);
    
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByTestId('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByTestId('Message'), { target: { value: 'Hello!' } });
    
    fireEvent.click(screen.getByText('Send'));
    
    await waitFor(() => {
      expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    });
  });
});

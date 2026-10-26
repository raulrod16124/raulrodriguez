import { screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import { Navbar } from './Navbar';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../test/renderWithProviders';

const setScrollY = (value: number) => {
  Object.defineProperty(window, 'scrollY', {
    configurable: true,
    writable: true,
    value,
  });
};

beforeEach(() => {
  setScrollY(0);
});

const renderNavbar = (path = '/') =>
  renderWithProviders(<Navbar />, { route: path });

describe('Navbar tests', () => {
  test('should render the Navbar component', () => {
    renderNavbar();

    expect(screen.getByTestId('Navbar')).toBeInTheDocument();
  });

  test.each(['Work', 'Experience', 'Engineering', 'About', 'Contact'])(
    'should display the %s link',
    (label) => {
      renderNavbar();

      expect(screen.getByText(label)).toBeInTheDocument();
    },
  );

  test('should render the logo link to the home anchor', () => {
    renderNavbar();

    expect(
      screen.getByRole('link', { name: 'Raúl Rodríguez - Home' }),
    ).toHaveAttribute('href', '/#home');
  });

  test('should render hamburger button', () => {
    renderNavbar();

    const hamburger = screen.getByLabelText('Open menu');
    expect(hamburger).toBeInTheDocument();
    expect(hamburger.tagName).toBe('BUTTON');
  });

  test('should toggle menu on hamburger click', () => {
    renderNavbar();

    fireEvent.click(screen.getByLabelText('Open menu'));
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  test('should close menu on Escape key', () => {
    renderNavbar();

    fireEvent.click(screen.getByLabelText('Open menu'));
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  test('should close menu after navigating with an anchor link', () => {
    renderNavbar();

    fireEvent.click(screen.getByLabelText('Open menu'));
    fireEvent.click(screen.getByRole('link', { name: 'Work' }));

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  test('should mark the active anchor with aria-current', () => {
    renderNavbar('/#work');

    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute(
      'aria-current',
      'location',
    );
    expect(screen.getByRole('link', { name: 'Experience' })).not.toHaveAttribute(
      'aria-current',
    );
  });

  test('should not be elevated before the page is scrolled', () => {
    renderNavbar();

    expect(screen.getByTestId('Navbar')).toHaveAttribute(
      'data-scrolled',
      'false',
    );
    expect(screen.getByTestId('Navbar')).toHaveAttribute(
      'data-elevated',
      'false',
    );
  });

  test('should become elevated after scrolling and return to the top state', async () => {
    renderNavbar();

    setScrollY(120);
    fireEvent.scroll(window);

    await waitFor(() =>
      expect(screen.getByTestId('Navbar')).toHaveAttribute(
        'data-scrolled',
        'true',
      ),
    );

    setScrollY(0);
    fireEvent.scroll(window);

    await waitFor(() =>
      expect(screen.getByTestId('Navbar')).toHaveAttribute(
        'data-scrolled',
        'false',
      ),
    );
  });

  test('should elevate the navbar while the mobile menu is open', () => {
    renderNavbar();

    fireEvent.click(screen.getByLabelText('Open menu'));

    expect(screen.getByTestId('Navbar')).toHaveAttribute(
      'data-elevated',
      'true',
    );
  });
});

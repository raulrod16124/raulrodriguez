import { render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { Root } from './Root';
import '@testing-library/jest-dom';

const LocationProbe = () => {
  const location = useLocation();

  return <div data-testid="location">{`${location.pathname}${location.hash}`}</div>;
};

const renderRoot = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Root />
      <LocationProbe />
    </MemoryRouter>,
  );

describe('Root Component Routing', () => {
  test('renders the home page at the root path', () => {
    renderRoot('/');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /senior frontend engineer/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent(/^\/$/);
  });

  test('redirects /home to the home anchor', () => {
    renderRoot('/home');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /senior frontend engineer/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('/#home');
  });

  test('redirects /experience to the experience section', () => {
    renderRoot('/experience');

    expect(
      screen.getByRole('heading', { level: 2, name: 'Experience' }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('/#experience');
  });

  test('redirects /expertise to the what-i-do section', () => {
    renderRoot('/expertise');

    expect(
      screen.getByRole('heading', { level: 2, name: 'What I do' }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('/#what-i-do');
  });

  test('redirects /contact to the contact section', () => {
    renderRoot('/contact');

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /let's build something useful/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent('/#contact');
  });

  test('redirects an unknown path to the home page', () => {
    renderRoot('/unknown');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /senior frontend engineer/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('location')).toHaveTextContent(/^\/$/);
  });
});

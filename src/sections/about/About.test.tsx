import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { About } from './About';
import { renderWithProviders } from '../../test/renderWithProviders';

vi.mock('../../helpers/experience', () => ({
  getYearsOfExperience: () => 5,
}));

vi.mock('../../components/cv-dialog/CvDialog', () => ({
  CvDialog: () => <button type="button">View CV</button>,
}));

describe('About', () => {
  it('renders the section heading and the dynamic experience copy', () => {
    renderWithProviders(<About />);

    expect(
      screen.getByRole('heading', { level: 2, name: 'About' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /senior frontend engineer with 5\+ years building product frontends/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/fintech, e-mobility and web\/mobile products/i),
    ).toBeInTheDocument();
  });

  it('renders the CV trigger', () => {
    renderWithProviders(<About />);

    expect(
      screen.getByRole('button', { name: /view cv/i }),
    ).toBeInTheDocument();
  });
});

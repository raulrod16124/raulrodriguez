import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, vi, beforeEach, expect } from 'vitest';
import { Projects } from './Projects';
import { projects } from './ProjectsList';
import "@testing-library/jest-dom";
import { truncateTitle } from '../../helpers/TruncateTitle';

// Mock de Sidebar
vi.mock('./components/Sidebar', () => ({
  Sidebar: ({ project }: { project: typeof projects[0] }) => (
    <div data-testid="sidebar-project">
      <h1>{truncateTitle(project.title)}</h1>
    </div>
  ),
}));

describe('Projects', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should display truncated title if the project title is longer than 12 characters', () => {
    render(<Projects />);

    projects.forEach((project) => {
      const truncatedTitle = truncateTitle(project.title)
      const getTitlesFromScreen = screen.getAllByText(truncatedTitle)[0];
      expect(getTitlesFromScreen).toBeInTheDocument();
    });
  });

  test('should render the Sidebar with the correct project initially', () => {
    render(<Projects />);

    const firstProject = projects[0];

    const sidebarProject = screen.getByTestId('sidebar-project');
    expect(sidebarProject).toHaveTextContent(firstProject.title);
  });

//   test('should render all project cards correctly', () => {
//     render(<Projects />);

//     projects.forEach((project) => {
//       const truncatedTitle = truncateTitle(project.title)
//       const image = screen.getByAltText(project.title);

//       expect(image).toBeInTheDocument();
//       expect(image).toHaveAttribute('src', project.image);

//       expect(screen.getByText(truncatedTitle)).toBeInTheDocument();
//     });
//   });

  test('should select a project when clicking on a project card', () => {
    render(<Projects />);

    const firstProject = projects[0];
    const secondProject = projects[1];

    expect(screen.getByTestId('sidebar-project')).toHaveTextContent(firstProject.title);

    const secondProjectCard = screen.getByText(
      secondProject.title.length > 12
        ? `${secondProject.title.substring(0, 8)}..`
        : secondProject.title
    );
    fireEvent.click(secondProjectCard);

    expect(screen.getByTestId('sidebar-project')).toHaveTextContent(secondProject.title);
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Sidebar } from './Sidebar';
import { ProjectType } from './Sidebar';
import "@testing-library/jest-dom";

const mockProject: ProjectType = {
  title: 'Test Project',
  description: 'This is a test project',
  technologies: ['React', 'TypeScript', 'CSS'],
  image: 'https://example.com/project-image.jpg',
  carouselImages: ['https://example.com/carousel1.jpg', 'https://example.com/carousel2.jpg'],
  repoLink: 'https://github.com/test-repo',
  demoLink: 'https://test-demo.com',
};

describe('Sidebar', () => {
  test('should render the project title, description, and technologies', () => {
    render(<Sidebar project={mockProject} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project')).toBeInTheDocument();

    mockProject.technologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  test('should render the project image and carousel images', () => {
    render(<Sidebar project={mockProject} />);

    const projectImage = screen.getByAltText('Test Project');
    expect(projectImage).toBeInTheDocument();
    expect(projectImage).toHaveAttribute('src', mockProject.image);

    mockProject.carouselImages.forEach(image => {
      const carouselImage = screen.getByAltText(`Image ${image}`);
      expect(carouselImage).toBeInTheDocument();
      expect(carouselImage).toHaveAttribute('src', image);
    });
  });

  test('should render external links for repo and demo', () => {
    render(<Sidebar project={mockProject} />);

    const demoLink = screen.getAllByRole('link')[0];
    expect(demoLink).toBeInTheDocument();
    expect(demoLink).toHaveAttribute('href', mockProject.demoLink);

    const repoLink = screen.getAllByRole('link')[1];
    expect(repoLink).toBeInTheDocument();
    expect(repoLink).toHaveAttribute('href', mockProject.repoLink);
  });

  test('should open and close the image modal when a carousel image is clicked', () => {
    render(<Sidebar project={mockProject} />);

    const carouselImage = screen.getByAltText(`Image ${mockProject.carouselImages[0]}`);
    fireEvent.click(carouselImage);

    const modalImage = screen.getByAltText('Selected');
    expect(modalImage).toBeInTheDocument();
    expect(modalImage).toHaveAttribute('src', mockProject.carouselImages[0]);

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(modalImage).not.toBeInTheDocument();
  });
});

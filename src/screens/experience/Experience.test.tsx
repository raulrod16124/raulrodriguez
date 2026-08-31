import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Experience } from "./Experience";
import "@testing-library/jest-dom";
import { EXPERIENCES } from "./Experience.constants";

describe("Experience tests", () => {
  test("should render the Experience component", () => {
    render(<Experience />);
    const experienceSection = screen.getByTestId("experience");
    expect(experienceSection).toBeInTheDocument();
  });

  test("should render the section title", () => {
    render(<Experience />);
    const title = screen.getByText("Experience");
    expect(title).toBeInTheDocument();
  });

  test("should render all experience cards", () => {
    render(<Experience />);
    const roles = screen.getAllByRole("heading", { level: 3 });
    expect(roles).toHaveLength(EXPERIENCES.length);
  });

  test("should render company names", () => {
    render(<Experience />);
    EXPERIENCES.forEach((exp) => {
      expect(screen.getByText(exp.company)).toBeInTheDocument();
    });
  });

  test("should render technology tags for each experience", () => {
    render(<Experience />);
    const allTechs = EXPERIENCES.flatMap((exp) => exp.technologies);
    const uniqueTechs = [...new Set(allTechs)];
    uniqueTechs.forEach((tech) => {
      const elements = screen.getAllByText(tech);
      expect(elements.length).toBeGreaterThanOrEqual(1);
    });
  });

  test("should have the experience section id for anchor links", () => {
    render(<Experience />);
    const section = document.getElementById("experience");
    expect(section).toBeInTheDocument();
  });
});

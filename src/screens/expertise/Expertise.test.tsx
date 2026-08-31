import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Expertise } from "./Expertise";
import "@testing-library/jest-dom";
import { EXPERTISE_GROUPS } from "./Expertise.constants";

describe("Expertise tests", () => {
  test("should render the Expertise component", () => {
    render(<Expertise />);
    const expertiseSection = screen.getByTestId("expertise");
    expect(expertiseSection).toBeInTheDocument();
  });

  test("should render the section title", () => {
    render(<Expertise />);
    const title = screen.getByText("Technical Expertise");
    expect(title).toBeInTheDocument();
  });

  test("should render all expertise groups", () => {
    render(<Expertise />);
    const groupTitles = screen.getAllByRole("heading", { level: 3 });
    expect(groupTitles).toHaveLength(EXPERTISE_GROUPS.length);
  });

  test("should render group titles", () => {
    render(<Expertise />);
    EXPERTISE_GROUPS.forEach((group) => {
      expect(screen.getByText(group.title)).toBeInTheDocument();
    });
  });

  test("should render technology tags for each group", () => {
    render(<Expertise />);
    EXPERTISE_GROUPS.forEach((group) => {
      group.technologies.forEach((tech) => {
        const elements = screen.getAllByText(tech);
        expect(elements.length).toBeGreaterThanOrEqual(1);
      });
    });
  });

  test("should have the expertise section id for anchor links", () => {
    render(<Expertise />);
    const section = document.getElementById("expertise");
    expect(section).toBeInTheDocument();
  });

  test("should have aria-labelledby pointing to title", () => {
    render(<Expertise />);
    const section = screen.getByTestId("expertise");
    expect(section).toHaveAttribute("aria-labelledby", "expertise-title");
  });

  test("should render the About section", () => {
    render(<Expertise />);
    const aboutBlock = screen.getByTestId("about-block");
    expect(aboutBlock).toBeInTheDocument();
  });

  test("should render the About label", () => {
    render(<Expertise />);
    const aboutLabel = screen.getByText("About");
    expect(aboutLabel).toBeInTheDocument();
  });

  test("should render the CV download link", () => {
    render(<Expertise />);
    const cvLink = screen.getByText("View CV");
    expect(cvLink).toBeInTheDocument();
    expect(cvLink).toHaveAttribute("download");
  });

  test("should render the divider", () => {
    const { container } = render(<Expertise />);
    const divider = container.querySelector("hr");
    expect(divider).toBeInTheDocument();
  });
});

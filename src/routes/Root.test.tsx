// Root.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import { Root } from "./Root";
import "@testing-library/jest-dom";

vi.mock("../screens/home/Home", () => ({ Home: () => <div>Home Page</div> }));
vi.mock("../screens/about/AboutMe", () => ({ AboutMe: () => <div>About Me Page</div> }));
vi.mock("../screens/projects/Projects", () => ({ Projects: () => <div>Projects Page</div> }));
vi.mock("../screens/contact/Contact", () => ({ Contact: () => <div>Contact Page</div> }));

describe("Root Component Routing", () => {
  test("should render the Home page when at root path", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Root />
      </MemoryRouter>
    );
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  test("should render the About Me page when at /about-me", () => {
    render(
      <MemoryRouter initialEntries={["/about-me"]}>
        <Root />
      </MemoryRouter>
    );
    expect(screen.getByText("About Me Page")).toBeInTheDocument();
  });

  test("should render the Projects page when at /projects", () => {
    render(
      <MemoryRouter initialEntries={["/projects"]}>
        <Root />
      </MemoryRouter>
    );
    expect(screen.getByText("Projects Page")).toBeInTheDocument();
  });

  test("should render the Contact page when at /contact", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <Root />
      </MemoryRouter>
    );
    expect(screen.getByText("Contact Page")).toBeInTheDocument();
  });

  test("should redirect to Home when an unknown path is entered", () => {
    render(
      <MemoryRouter initialEntries={["/unknown-path"]}>
        <Root />
      </MemoryRouter>
    );
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });
});

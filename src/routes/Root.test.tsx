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

const RootWrapper = (path:string) => (
  <MemoryRouter initialEntries={[path]}>
    <Root />
  </MemoryRouter>
)

describe("Root Component Routing", () => {
  test("should render the Home page when at root path", () => {
    render(RootWrapper("/"));
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  test("should render the About Me page when at /about-me", () => {
    render(RootWrapper("/about-me"));
    expect(screen.getByText("About Me Page")).toBeInTheDocument();
  });

  test("should render the Projects page when at /projects", () => {
    render(RootWrapper("/projects"));
    expect(screen.getByText("Projects Page")).toBeInTheDocument();
  });

  test("should render the Contact page when at /contact", () => {
    render(RootWrapper("/contact"));
    expect(screen.getByText("Contact Page")).toBeInTheDocument();
  });

  test("should redirect to Home when an unknown path is entered", () => {
    render(RootWrapper("/unknown-path"));
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });
});

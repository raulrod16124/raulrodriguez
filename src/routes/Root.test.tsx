// Root.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import { Root } from "./Root";
import "@testing-library/jest-dom";

vi.mock("../screens/home/Home", () => ({ Home: () => <div>Home Page</div> }));
vi.mock("../screens/experience/Experience", () => ({ Experience: () => <div>Experience Page</div> }));
vi.mock("../screens/expertise/Expertise", () => ({ Expertise: () => <div>Expertise Page</div> }));
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

  test("should render the Experience page when at /experience", () => {
    render(RootWrapper("/experience"));
    expect(screen.getByText("Experience Page")).toBeInTheDocument();
  });

  test("should render the Expertise page when at /expertise", () => {
    render(RootWrapper("/expertise"));
    expect(screen.getByText("Expertise Page")).toBeInTheDocument();
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

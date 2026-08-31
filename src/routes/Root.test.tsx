// Root.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import { Root } from "./Root";
import "@testing-library/jest-dom";

vi.mock("../screens/home/Home", () => ({
  default: { Home: () => <div>Home Page</div> },
  Home: () => <div>Home Page</div>,
}));
vi.mock("../screens/experience/Experience", () => ({
  default: { Experience: () => <div>Experience Page</div> },
  Experience: () => <div>Experience Page</div>,
}));
vi.mock("../screens/expertise/Expertise", () => ({
  default: { Expertise: () => <div>Expertise Page</div> },
  Expertise: () => <div>Expertise Page</div>,
}));
vi.mock("../screens/contact/Contact", () => ({
  default: { Contact: () => <div>Contact Page</div> },
  Contact: () => <div>Contact Page</div>,
}));

const RootWrapper = (path: string) => (
  <MemoryRouter initialEntries={[path]}>
    <Root />
  </MemoryRouter>
);

describe("Root Component Routing", () => {
  test("should render the Home page when at root path", async () => {
    render(RootWrapper("/"));
    await waitFor(() => {
      expect(screen.getByText("Home Page")).toBeInTheDocument();
    });
  });

  test("should render the Experience page when at /experience", async () => {
    render(RootWrapper("/experience"));
    await waitFor(() => {
      expect(screen.getByText("Experience Page")).toBeInTheDocument();
    });
  });

  test("should render the Expertise page when at /expertise", async () => {
    render(RootWrapper("/expertise"));
    await waitFor(() => {
      expect(screen.getByText("Expertise Page")).toBeInTheDocument();
    });
  });

  test("should render the Contact page when at /contact", async () => {
    render(RootWrapper("/contact"));
    await waitFor(() => {
      expect(screen.getByText("Contact Page")).toBeInTheDocument();
    });
  });

  test("should redirect to Home when an unknown path is entered", async () => {
    render(RootWrapper("/unknown-path"));
    await waitFor(() => {
      expect(screen.getByText("Home Page")).toBeInTheDocument();
    });
  });
});

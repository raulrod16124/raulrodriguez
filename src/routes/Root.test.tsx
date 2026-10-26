// Root.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import { Root } from "./Root";
import "@testing-library/jest-dom";

const RootWrapper = (path: string) => (
  <MemoryRouter initialEntries={[path]}>
    <Root />
  </MemoryRouter>
);

describe("Root Component Routing", () => {
  test("should render HomePage when at root path", () => {
    render(RootWrapper("/"));
    expect(screen.getByText("Hero")).toBeInTheDocument();
  });

  test("should redirect /home to home section", () => {
    render(RootWrapper("/home"));
    expect(screen.getByText("Hero")).toBeInTheDocument();
  });

  test("should redirect /experience to experience section", () => {
    render(RootWrapper("/experience"));
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  test("should redirect /expertise to what-i-do section", () => {
    render(RootWrapper("/expertise"));
    expect(screen.getByText("What I do")).toBeInTheDocument();
  });

  test("should redirect /contact to contact section", () => {
    render(RootWrapper("/contact"));
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("should redirect to Home when an unknown path is entered", () => {
    render(RootWrapper("/unknown"));
    expect(screen.getByText("Hero")).toBeInTheDocument();
  });
});

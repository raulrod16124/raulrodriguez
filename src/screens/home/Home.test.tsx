import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest"
import { Home } from "./Home";
import "@testing-library/jest-dom";

describe("Home tests", () => {
    test("should render the Home component", () => {
        render(<Home />)
        const homeTestid = screen.getByTestId("home");
        expect(homeTestid).toBeInTheDocument();
    })
    test("should display the name 'Raúl Rodríguez'", () => {
        render(<Home />)
        const nameText = screen.getByText("Raúl Rodríguez");
        expect(nameText).toBeInTheDocument();
    })
    test("should display the role 'Frontend Engineer'", () => {
        render(<Home />)
        const roleText = screen.getByText("Frontend Engineer");
        expect(roleText).toBeInTheDocument();
    })
    test("should display 'React · TypeScript'", () => {
        render(<Home />)
        const subtitleText = screen.getByText("React · TypeScript");
        expect(subtitleText).toBeInTheDocument();
    })
    test("should display the value proposition", () => {
        render(<Home />)
        const valueProp = screen.getByText(/Building scalable web applications/);
        expect(valueProp).toBeInTheDocument();
    })
    test("should display CTA links", () => {
        render(<Home />)
        expect(screen.getByText("View experience")).toBeInTheDocument();
        expect(screen.getByText("GitHub")).toBeInTheDocument();
        expect(screen.getByText("Contact")).toBeInTheDocument();
    })
    test("should find the role img in the document", () => {
        render(<Home />)
        const imgRole = screen.getByRole("img");
        expect(imgRole).toBeInTheDocument();
    })
})
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
    test("should find the text 'I'm Raúl Rodríguez' in the document", () => {
        render(<Home />)
        const nameText = screen.getByText("I'm Raúl Rodríguez");
        expect(nameText).toBeInTheDocument();
    })
    test("should find the text 'frontend' in the document", () => {
        render(<Home />)
        const frontendText = screen.getByText("frontend");
        expect(frontendText).toBeInTheDocument();
    })
    test("should find the text 'developer' in the document", () => {
        render(<Home />)
        const developerText = screen.getByText("developer");
        expect(developerText).toBeInTheDocument();
    })
    test("should find the role img in the document", () => {
        render(<Home />)
        const imgRole = screen.getByRole("img");
        expect(imgRole).toBeInTheDocument();
    })
})
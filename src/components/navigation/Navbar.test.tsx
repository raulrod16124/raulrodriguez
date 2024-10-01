import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest"
import { Navbar } from "./Navbar";
import "@testing-library/jest-dom";

describe("Navbar tests", () => {
    test("should render the Navbar component", () => {
        render(<Navbar />)
        const navbarTestid = screen.getByTestId("Navbar");
        expect(navbarTestid).toBeInTheDocument();
    })
    test("should find the text 'home' twice in the document", () => {
        render(<Navbar />)
        const homeText = screen.getAllByText("home");
        expect(homeText).toHaveLength(2);
    })
    test("should find the text 'about me' twice in the document", () => {
        render(<Navbar />)
        const about_meText = screen.getAllByText("about me");
        expect(about_meText).toHaveLength(2);
    })
    test("should find the text 'projects' twice in the document", () => {
        render(<Navbar />)
        const projectsText = screen.getAllByText("projects");
        expect(projectsText).toHaveLength(2);
    })
    test("should find the text 'contact' twice in the document", () => {
        render(<Navbar />)
        const contactText = screen.getAllByText("contact");
        expect(contactText).toHaveLength(2);
    })
})
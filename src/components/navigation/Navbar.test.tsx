import { render, screen } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest"
import { Navbar } from "./Navbar";
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom";

beforeEach(() => {
    render(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>
    )
})

describe("Navbar tests", () => {
    test("should render the Navbar component", () => {
        const navbarTestid = screen.getByTestId("Navbar");
        expect(navbarTestid).toBeInTheDocument();
    })
    test("should find the text 'home' twice in the document", () => {
        const homeText = screen.getAllByText("home");
        expect(homeText).toHaveLength(2);
    })
    test("should find the text 'about me' twice in the document", () => {
        const about_meText = screen.getAllByText("about me");
        expect(about_meText).toHaveLength(2);
    })
    test("should find the text 'projects' twice in the document", () => {
        const projectsText = screen.getAllByText("projects");
        expect(projectsText).toHaveLength(2);
    })
    test("should find the text 'contact' twice in the document", () => {
        const contactText = screen.getAllByText("contact");
        expect(contactText).toHaveLength(2);
    })
})
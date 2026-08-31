import { render, screen, fireEvent } from "@testing-library/react";
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
    test("should display 'Home' link", () => {
        const homeText = screen.getByText("Home");
        expect(homeText).toBeInTheDocument();
    })
    test("should display 'Experience' link", () => {
        const experienceText = screen.getByText("Experience");
        expect(experienceText).toBeInTheDocument();
    })
    test("should display 'Expertise' link", () => {
        const expertiseText = screen.getByText("Expertise");
        expect(expertiseText).toBeInTheDocument();
    })
    test("should display 'Contact' link", () => {
        const contactText = screen.getByText("Contact");
        expect(contactText).toBeInTheDocument();
    })
    test("should not display 'Projects' link", () => {
        const projectsText = screen.queryByText("Projects");
        expect(projectsText).not.toBeInTheDocument();
    })
    test("should render hamburger button", () => {
        const hamburger = screen.getByLabelText("Open menu");
        expect(hamburger).toBeInTheDocument();
        expect(hamburger.tagName).toBe("BUTTON");
    })
    test("should toggle menu on hamburger click", () => {
        const hamburger = screen.getByLabelText("Open menu");
        fireEvent.click(hamburger);
        expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
    })
    test("should close menu on Escape key", () => {
        const hamburger = screen.getByLabelText("Open menu");
        fireEvent.click(hamburger);
        expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
        fireEvent.keyDown(document, { key: "Escape" });
        expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
    })
})

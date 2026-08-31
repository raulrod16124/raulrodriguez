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
    test("should display 'Home' link", () => {
        const homeText = screen.getByText("Home");
        expect(homeText).toBeInTheDocument();
    })
    test("should display 'Experience' link", () => {
        const experienceText = screen.getByText("Experience");
        expect(experienceText).toBeInTheDocument();
    })
    test("should display 'About' link", () => {
        const aboutText = screen.getByText("About");
        expect(aboutText).toBeInTheDocument();
    })
    test("should display 'Contact' link", () => {
        const contactText = screen.getByText("Contact");
        expect(contactText).toBeInTheDocument();
    })
    test("should not display 'Projects' link", () => {
        const projectsText = screen.queryByText("Projects");
        expect(projectsText).not.toBeInTheDocument();
    })
})

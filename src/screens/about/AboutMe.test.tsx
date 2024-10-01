import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest"
import { AboutMe } from "./AboutMe";
import "@testing-library/jest-dom";

describe("AboutMe tests", () => {
    test("should render the AboutMe component", () => {
        render(<AboutMe />)
        const about_meTestid = screen.getByTestId("about-me");
        expect(about_meTestid).toBeInTheDocument();
    })
    test("should find the role img in the document", () => {
        render(<AboutMe />)
        const roleImg = screen.getByRole("img");
        expect(roleImg).toBeInTheDocument();
    })
    test("should find the text 'CV' in the document", () => {
        render(<AboutMe />)
        const cvText = screen.getByText("CV");
        expect(cvText).toBeInTheDocument();
    })
    test("should find the text 'Frontend Developer' in the document", () => {
        const app = render(<AboutMe />)
        const frontendDevText = app.container.innerHTML.includes("Frontend Developer");
        expect(frontendDevText).toBeTruthy();
    })
    test("should find the text 'Skills' in the document", () => {
        render(<AboutMe />)
        const skillsText = screen.getByText("Skills");
        expect(skillsText).toBeInTheDocument();
    })
    test("should find the role list in the document", () => {
        render(<AboutMe />)
        const roleList = screen.getByRole("list");
        expect(roleList).toBeInTheDocument();
    })
    test("should find the role listitem 20 times in the document", () => {
        render(<AboutMe />)
        const roleListItem = screen.getAllByRole("listitem");
        expect(roleListItem).toHaveLength(20);
    })
})
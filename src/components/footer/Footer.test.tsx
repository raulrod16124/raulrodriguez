import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest"
import { Footer } from "./Footer";
import "@testing-library/jest-dom";

describe("Footer tests", () => {
    test("should render the Footer component", () => {
        render(<Footer />)
        const footerTestid = screen.getByTestId("footer");
        expect(footerTestid).toBeInTheDocument();
    })
    test("should display copyright text", () => {
        render(<Footer />)
        const allRightsText = screen.getByText(/All rights reserved\./);
        expect(allRightsText).toBeInTheDocument();
    })
    test("should display GitHub and LinkedIn links", () => {
        render(<Footer />)
        const githubLink = screen.getByLabelText("GitHub Profile");
        const linkedinLink = screen.getByLabelText("LinkedIn Profile");
        expect(githubLink).toBeInTheDocument();
        expect(linkedinLink).toBeInTheDocument();
    })
})

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
    test("should find the text `© ${new Date().getFullYear()} All rights reserved.`", () => {
        render(<Footer />)
        const allRightsText = screen.getByText(`© ${new Date().getFullYear()} All rights reserved.`);
        expect(allRightsText).toBeInTheDocument();
    })
})
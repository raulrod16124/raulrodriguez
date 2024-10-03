import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest"
import { MemoryRouter } from "react-router-dom";
import { App } from "./App";
import "@testing-library/jest-dom";

describe("App tests", () => {
    test("should render the App component", () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        const appTestid = screen.getByTestId("app");
        expect(appTestid).toBeInTheDocument();
    })
})
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest"
import { App } from "./App";
import "@testing-library/jest-dom";

describe("App tests", () => {
    test("should render the App component", () => {
        render(<App />)
        const appTestid = screen.getByTestId("app");
        expect(appTestid).toBeInTheDocument();
    })
})
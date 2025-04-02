import { describe, it, expect, vi } from "vitest";
import { checkInput } from "./helper";

describe("checkInput", () => {
    it("should return an error for empty input", () => {
        const callback = vi.fn();
        checkInput("", callback);
        expect(callback).toHaveBeenCalledWith("Empty text error, fill in the fields");
    });

    it("should return an error for short input", () => {
        const callback = vi.fn();
        checkInput("Hi", callback);
        expect(callback).toHaveBeenCalledWith("Short text error, at least 3 characters");
    });

    it("should return an error for unsafe input", () => {
        const callback = vi.fn();
        checkInput("<script>alert('XSS')</script>", callback);
        expect(callback).toHaveBeenCalledWith("Unsafe input detected!");
    });

    it("should not return an error for safe input", () => {
        const callback = vi.fn();
        checkInput("Hello", callback);
        expect(callback).toHaveBeenCalledWith(undefined);
    });
});
import { describe, it, expect, vi } from "vitest";
import { increaseExperience } from "../about/helper";

describe("increaseExperience", () => {
    it("should return the correct experience when the current year is 2024", () => {
        vi.setSystemTime(new Date("2024-01-01"));
        expect(increaseExperience()).toBe(4);
    });

    it("should return the correct experience when the current year is 2025", () => {
        vi.setSystemTime(new Date("2025-01-01"));
        expect(increaseExperience()).toBe(5);
    });

    it("should return the correct experience when the current year is 2026", () => {
        vi.setSystemTime(new Date("2026-01-01"));
        expect(increaseExperience()).toBe(6);
    });

    afterEach(() => {
        vi.useRealTimers();
    });
});
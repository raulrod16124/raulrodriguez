import { describe, expect, test } from 'vitest';
import { getYearsOfExperience } from './experience';

describe('getYearsOfExperience', () => {
  test('returns 0 on the career start date', () => {
    expect(getYearsOfExperience(new Date('2021-07-01'))).toBe(0);
  });

  test('returns 0 before the first anniversary', () => {
    expect(getYearsOfExperience(new Date('2022-06-30'))).toBe(0);
  });

  test('returns 1 on the first anniversary', () => {
    expect(getYearsOfExperience(new Date('2022-07-01'))).toBe(1);
  });

  test('returns 5 in October 2026', () => {
    expect(getYearsOfExperience(new Date('2026-10-26'))).toBe(5);
  });

  test('returns 0 before the career start', () => {
    expect(getYearsOfExperience(new Date('2021-06-30'))).toBe(0);
  });
});

import { describe, test, expect } from 'vitest';
import { truncateTitle } from './TruncateTitle';

describe('TruncateTitle tests', () => {
  test('should return the title as is when it is shorter than the maxLength', () => {
    const title = 'Hello';
    const maxLength = 12;
    const result = truncateTitle(title, maxLength);
    expect(result).toBe('Hello');
  });

  test('should return the title as is when it is equal to the maxLength', () => {
    const title = 'Hello World!';
    const maxLength = 12;
    const result = truncateTitle(title, maxLength);
    expect(result).toBe('Hello World!');
  });

  test('should truncate correctly with a title longer than maxLength', () => {
    const title = 'Extraordinary';
    const maxLength = 10;
    const result = truncateTitle(title, maxLength);
    expect(result).toBe('Extrao..');
  });

  test('should use default maxLength of 12 when no maxLength is provided', () => {
    const title = 'This title is very long';
    const result = truncateTitle(title);
    expect(result).toBe('This tit..');
  });
  
  test('should return an empty string when given an empty title', () => {
    const title = '';
    const result = truncateTitle(title, 12);
    expect(result).toBe('');
  });
  
  test('should return an incomplete truncated title if maxLength is too small', () => {
    const title = 'SomeTitle';
    const result = truncateTitle(title, 4);
    expect(result).toBe('..');
  });
  
});

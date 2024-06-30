
import { lengthOfLongestSubstring } from '../0003_lengthOfLongestSubstring';

describe('lengthOfLongestSubstring', () => {
  test('should return 0 for an empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  test('should return 1 for a string with a single character', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });

  test('should return 2 for a string with no repeating characters', () => {
    expect(lengthOfLongestSubstring('ab')).toBe(2);
  });

  test('should return the length of the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3); // "wke" is the longest substring
    expect(lengthOfLongestSubstring('dvdf')).toBe(3); // "ddf" is one possible longest substring
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1); // "b" is the only non-repeating character
    expect(lengthOfLongestSubstring('au')).toBe(2); // "au" is the longest substring
  });

  test('should handle case sensitivity correctly', () => {
    expect(lengthOfLongestSubstring('aA')).toBe(2); // Case-sensitive
  });

  test('should work correctly with very long strings', () => {
    const longString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    expect(lengthOfLongestSubstring(longString)).toBe(62); // No repeating characters

    const longStringWithRepeats = 'abcdefghijklmnopqrstuvwxyzabcde';
    expect(lengthOfLongestSubstring(longStringWithRepeats)).toBe(26); // "abcdefghijklmnopqrstuvwxyz" is the longest substring
  });
});

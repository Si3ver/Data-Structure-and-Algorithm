

import { findAnagrams } from '../0438_findAnagrams';


// Jest 测试用例
describe('findAnagrams function', () => {

  test('should find all anagram occurrences', () => {
    const s = 'cbaebabacd';
    const p = 'abc';
    const result = findAnagrams(s, p);
    expect(result).toEqual([0, 6]);
  });

  test('should handle overlapping anagrams', () => {
    const s = 'abab';
    const p = 'ab';
    const result = findAnagrams(s, p);
    expect(result).toEqual([0, 1, 2]);
  });
});

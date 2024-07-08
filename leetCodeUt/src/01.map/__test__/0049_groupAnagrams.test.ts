import { groupAnagrams } from "../0049_groupAnagrams";

describe('module groupAnagrams', () => {
  test('case 1', () => {
    const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
    expect(result).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
  });

  test('case 2', () => {
    const result = groupAnagrams(['']);
    expect(result).toEqual([['']]);
  });

  test('case 3', () => {
    const result = groupAnagrams(['a']);
    expect(result).toEqual([['a']]);
  });
});

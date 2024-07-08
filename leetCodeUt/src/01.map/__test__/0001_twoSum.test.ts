import {describe, expect, test} from '@jest/globals';
import {twoSum} from '../0001_twoSum';

describe('[easy] twoSum', () => {
  test('case 1', () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 1]);
  });

  test('case 2', () => {
    const result = twoSum([3, 2, 4], 6);
    expect(result).toEqual([1, 2]);
  });

  test('case 3', () => {
    const result = twoSum([3, 3], 6);
    expect(result).toEqual([0, 1]);
  });
});

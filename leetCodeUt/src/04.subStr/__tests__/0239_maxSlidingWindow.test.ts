import { maxSlidingWindow } from '../0239_maxSlidingWindow';

describe('maxSlidingWindow', () => {
  it('should return the maximum elements in sliding window of size 3', () => {
    const nums = [1, 3, -1, -3, 5, 3, 6, 7];
    const k = 3;
    const expected = [3, 3, 5, 5, 6, 7];
    const result = maxSlidingWindow(nums, k);
    expect(result).toEqual(expected);
  });

  it('should return the maximum elements in sliding window of size 1', () => {
    const nums = [1, 3, -1, -3, 5, 3, 6, 7];
    const k = 1;
    const expected = [1, 3, -1, -3, 5, 3, 6, 7];
    const result = maxSlidingWindow(nums, k);
    expect(result).toEqual(expected);
  });

  it('should return the maximum elements in sliding window of size 2', () => {
    const nums = [1, 2, 1, 2, 6, 7, 5, 1, 2, 3, 4];
    const k = 2;
    const expected = [2, 2, 2, 6, 7, 7, 5, 2, 3, 4];
    const result = maxSlidingWindow(nums, k);
    expect(result).toEqual(expected);
  });

  it('should handle k equal to the length of the input array', () => {
    const nums = [1, 2, 3];
    const k = 3;
    const expected = [3];
    const result = maxSlidingWindow(nums, k);
    expect(result).toEqual(expected);
  });

  it('should return correct results for negative numbers', () => {
    const nums = [-1, -3, -2, -5, -4];
    const k = 2;
    const expected = [-1, -2, -2, -4];
    const result = maxSlidingWindow(nums, k);
    expect(result).toEqual(expected);
  });

  // ... 可以添加更多测试用例
});

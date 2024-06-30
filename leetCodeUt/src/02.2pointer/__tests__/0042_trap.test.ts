import { trap } from "../0042_trap";


describe('trap function', () => {
  test('should return 0 for an array with less than 3 elements', () => {
    expect(trap([])).toBe(0);
    expect(trap([1])).toBe(0);
    expect(trap([1, 2])).toBe(0);
  });

  test('should return correct result for simple cases', () => {
    expect(trap([0, 1, 0])).toBe(0);
    expect(trap([1, 0, 2])).toBe(1);
    expect(trap([1, 0, 1, 0, 1])).toBe(2);
  });

  test('should return correct result for complex cases', () => {
    expect(trap([3, 0, 1, 3, 0, 5])).toBe(8);
    expect(trap([2, 0, 2])).toBe(2);
    expect(trap([6, 0, 4, 2, 0, 5, 1, 9, 0])).toBe(24);
  });

  test('should handle cases where all elements are the same', () => {
    expect(trap([1, 1, 1])).toBe(0);
    expect(trap([5, 5, 5, 5, 5])).toBe(0);
  });

  test('should handle cases with one element higher than all others', () => {
    expect(trap([0, 0, 7, 0, 0])).toBe(0);
    expect(trap([2, 1, 1, 2, 6, 1, 1, 2, 1])).toBe(4);
  });

  test('should handle edge cases', () => {
    expect(trap([0, 0, 0, 2, 0, 0])).toBe(0);
    expect(trap([2, 0, 0, 2, 0])).toBe(4);
    expect(trap([5,5,1,7,1,1,5,2,7,6])).toBe(23)
  });
});

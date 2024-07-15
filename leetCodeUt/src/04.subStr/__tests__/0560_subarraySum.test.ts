
import { subarraySum } from '../0560_subarraySum';

describe('subarraySum', () => {
  test('should return the number of subarrays that sum to k', () => {
    expect(subarraySum([1, 1, 1], 2)).toBe(2); // [1, 1] and [1, 1] both sum to 2
    expect(subarraySum([1, -1, 1], 0)).toBe(2); // [1, -1] and [-1, 1] both sum to 0
    expect(subarraySum([0], 0)).toBe(1); // The single element [0] sums to 0
    expect(subarraySum([1, 2, 3], 3)).toBe(2); // [1, 2, 3] sums to 3
    expect(subarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4], 3)).toBe(5); // Multiple subarrays sum to 3
/**
 * index,  num,  sum, sum - k, count, Map
 *  null, null, null, sum - k, count, 0 => 1,
 *     0,   -2,   -2,      -5,      , 0 => 1, -2 => 1,
 *     1,    1,   -1,      -4,      , 0 => 1, -2 => 1, -1 => 1,
 *     2,   -3,   -4,      -7,      , 0 => 1, -2 => 1, -1 => 1, -4 => 1
 *     3,    4,    0,      -3,      ,         -2 => 1, -1 => 1, -4 => 1, 0 => 2,
 *     4,   -1,   -1,      -4,     1,         -2 => 1, -1 => 2, -4 => 1, 0 => 2,
 *     5,    2,    1,      -2,     2,         -2 => 1, -1 => 2, -4 => 1, 0 => 2, 1 => 1,
 *     6,    1,    2,      -1,     4,         -2 => 1, -1 => 2, -4 => 1, 0 => 2, 1 => 1, 2 => 1,
 *     7,   -5,   -3,      -6,     4,         -2 => 1, -1 => 2, -4 => 1, 0 => 2, 1 => 1, 2 => 1, -7 => 1,
 *     8,    4,    1,      -2,     5,         -2 => 1, -1 => 2, -4 => 1, 0 => 2, 1 => 1, 2 => 1, -7 => 1, -3 => 1,
 *
 *                [4, -1]
 *         [1, -3, 4, -1, 2]
 *            [-3, 4, -1, 2, 1]
 *                       [2, 1]
 *         [1, -3, 4, -1, 2, 1, -5, 4]
 */

    expect(subarraySum([], 0)).toBe(0); // Empty array, no subarrays
    expect(subarraySum([1, 2, 3, 4], 11)).toBe(0); // No subarrays sum to 11
  });

  // Additional test case to check for overlapping subarrays
  test('should count overlapping subarrays correctly', () => {
    expect(subarraySum([1, 1, 1, 1], 2)).toBe(3); // [1, 1], [1, 1], [1, 1], [1, 1], [1, 1, 1], and [1, 1, 1, 1] all sum to 2
  });

  // Additional test case to handle negative k
  test('should handle negative k values correctly', () => {
    expect(subarraySum([1, 2, 3, 4, 5], -3)).toBe(0);
  });

  // Additional test case to check for large inputs
  test('should handle large inputs efficiently', () => {
    const largeInput = Array.from({ length: 1000 }, (_, i) => i % 3 - 1); // Generates an array of 1000 elements, each element is -1, 0, or 1
    const k = 0;
    const startTime = Date.now();
    const result = subarraySum(largeInput, k);
    const endTime = Date.now();
    // We're not testing for a specific result here, but for performance.
    // The test will fail if it takes too long (say, more than 1 second).
    // Adjust the threshold according to your requirements.
    expect(endTime - startTime).toBeLessThan(1000); // Execution time should be less than 1 second
    // However, we can still assert that the result is reasonable for this specific input
    // (this is not a strict requirement for the algorithm, but just a sanity check)
    expect(result).toBeGreaterThanOrEqual(333); // At least 1/3 of subarrays should sum to 0
  });
});

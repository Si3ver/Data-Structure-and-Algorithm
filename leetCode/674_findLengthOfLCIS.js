/**
 * https://leetcode.cn/problems/longest-continuous-increasing-subsequence/
 * 最长连`续递增序`列
 * easy
 */

var findLengthOfLCIS = function(nums) {
  let count = 1;
  let max = 1;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[i - 1]) {
      ++count;
    } else {
      max = Math.max(max, count);
      count = 1;
    }
  }
  return Math.max(max, count);
};

// ---- test cases ----
console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); // 3
console.log(findLengthOfLCIS([2, 2, 2, 2, 2])); // 1
console.log(findLengthOfLCIS([1, 3, 5, 7])); // 4
console.log(findLengthOfLCIS([10, 9, 2, 5, 3, 7, 101, 18])); // 3     3,7,101

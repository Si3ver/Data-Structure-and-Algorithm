/**
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array
 * 删除有序数组中的重复项
 * easy
 */

var removeDuplicates = function(nums) {
  const n = nums.length;
  let count = 0;
  for (let i = 1; i < n; ++i) {
    if (nums[i] === nums[i - 1]) {
      ++count;
    } else {
      nums[i - count] = nums[i];
    }
  }
  return n - count;
}

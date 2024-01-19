/**
 * https://leetcode.cn/problems/remove-element
 * 移除元素
 * easy
 */

var removeElement = function(nums, val) {
  const n = nums.length;
  let count = 0;
  for (let i = 0; i < n; ++i) {
    if (nums[i] === val) {
      ++count;
    } else {
      nums[i - count] = nums[i];
    }
  }
  return n - count;
}

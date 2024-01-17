/**
 * https://leetcode.cn/problems/majority-element
 * 多数元素
 * easy
 */

var majorityElement = function(nums) {
  if (nums.length < 1) return;
  let res = nums[0], count = 1;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === res) {
      ++count;
    } else {
      --count;
      if (count < 0) {
        res = nums[i];
        count = 1;
      }
    }
  }
  return res;
}

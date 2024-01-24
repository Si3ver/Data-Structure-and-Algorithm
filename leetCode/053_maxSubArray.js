/**
 * https://leetcode.cn/problems/maximum-subarray
 * 最大子数组和
 * medium
 */

var maxSubArray = function(arr) {
  let max = -Infinity, prefix = -Infinity;
  for (let i = 0; i < arr.length; ++i) {
    prefix = Math.max(0, prefix) + arr[i];
    max = Math.max(max, prefix);
  }
  return arr.length ? max : undefined;
};

// ----
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23

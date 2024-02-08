/**
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted
 * 两数之和II - 输入有序数组
 * medium
 */

var twoSum = function(arr, target) {
  let i = 0, j = arr.length - 1;
  while (i < j) {
    const sum = arr[i] + arr[j];
    if (sum === target) {
      return [i + 1, j + 1];
    } else if (sum < target) {
      ++i;
    } else {
      --j;
    }
  }
  return [-1, -1];
};

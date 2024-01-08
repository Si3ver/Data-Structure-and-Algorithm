/**
 * https://leetcode.cn/problems/median-of-two-sorted-arrays
 *
 * 寻找两个正序数组的中位数
 *
 * !! 复杂度要求 O(log(m + n)), 不能遍历，必须二分
 *
 */
var findMedianSortedArrays = function(arr1, arr2) {
  const m = arr1.length, n = arr2.length;


};

// ---- test case ----
console.log(findMedianSortedArrays([1,3], [2])); // 2
console.log(findMedianSortedArrays([1,2], [3,4])); // 2.5

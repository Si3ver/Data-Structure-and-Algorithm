/**
 * https://leetcode.cn/problems/merge-sorted-array
 * 合并两个有序数组
 * easy
 * 思路：从后往前比较。三指针，其中 i、j 指向两数组尾部元素，k 指向要放置的位置。
 */

var merge = function(nums1, m, nums2, n) {
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) return;

  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >=0 && j >= 0) {
    nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
}

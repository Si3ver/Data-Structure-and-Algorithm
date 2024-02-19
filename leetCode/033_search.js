/**
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/description
 *
 * 搜索旋转排序数组
 *
 * 思路：二分 + 判断逆序对在哪边
 */

var search = function(arr, target) {
  const n = arr.length;
  let lo = 0, hi = n - 1;
  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1);
    if (target === arr[mid]) {
      return mid;
    }
    if (arr[lo] <= arr[mid]) { // 逆序在右边
      if (arr[lo] <= target && target < arr[mid]) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else { // 逆序在左边
      if (arr[mid] < target && target <= arr[hi]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
  }
  return -1;
};

// ---- test case ----
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));

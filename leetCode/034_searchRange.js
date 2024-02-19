/**
 * https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array
 * 在排序数组中查找元素的第一个和最后一个位置
 *
 * 思路：二分查找 + 左右寻找重复元素
 *
 */

var searchRange = function (nums, target) {
  const n = nums.length;
  let lo = 0, hi = n - 1, targetIdx = -Infinity;
  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1);
    if (target === nums[mid]) {
      targetIdx = mid;
      break; // 找到后记得写 break，否则可能死循环
    } else if (target < nums[mid]) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  // console.log('ttt', targetIdx)
  if (targetIdx === -Infinity) return [-1, -1];

  // spread
  let start = targetIdx, end = targetIdx;
  while (start > 0 && nums[start - 1] === target) --start;
  while (end < n - 1 && nums[end + 1] === target) ++end;
  return [start, end];
};

// ---- test case ----
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
console.log(searchRange([], 0)); // [-1, -1]
console.log(searchRange([1], 1)); // [0, 0]

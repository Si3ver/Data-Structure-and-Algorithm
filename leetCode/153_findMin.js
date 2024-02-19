/**
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/description
 *
 * 寻找旋转排序数组中的最小值
 *
 * 二分查找变种
 * 注意：如果是正序，则取最左。否则，判断逆序对
 */

var findMin = function(arr) {
  const n = arr.length;
  let lo = 0, hi = n - 1;
  while (lo < hi) { // 小于
    if (arr[lo] < arr[hi]) return arr[lo]; // 已经正序了，左边最小
    const mid = lo + ((hi - lo) >> 1);
    if (arr[lo] <= arr[mid]) { // 逆序对在右边：mid + 1 ~ hi
      lo = mid + 1;
    } else { // 逆序对范围：lo ~ mid
      hi = mid;
    }
  }
  return arr[lo];
};

// ---- test case ----
console.log(findMin([3,4,5,1,2]));
console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([11,13,15,17]));

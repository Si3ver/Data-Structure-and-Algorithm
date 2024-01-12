/**
 * https://leetcode.cn/problems/median-of-two-sorted-arrays
 *
 * 寻找两个正序数组的中位数
 *
 * !! 复杂度要求 O(log(m + n)), 不能遍历，必须二分
 *
 */
// 1. 暴力解法: 双指针移动 O(m + n)
// 2. 二分, 图解 👉 https://leetcode.cn/problems/median-of-two-sorted-arrays/solutions/259086/
var findMedianSortedArrays = function (arr1, arr2) {
  const m = arr1.length,
    n = arr2.length;
  if (m > n) return findMedianSortedArrays(arr2, arr1);

  let lo = 0,
    hi = m;
  while (lo <= hi) {
    const i = (lo + hi) >> 1;
    const j = ((m + n + 1) >> 1) - i;
    // const j = (m + n - lo - hi + 1) >> 1;
    // const j = ((m + n + 1) >> 1) - i // ((lo + hi) >> 1);

    const L1 = i === 0 ? -Infinity : arr1[i - 1];
    const R1 = i === m ? Infinity : arr1[i];
    const L2 = j === 0 ? -Infinity : arr2[j - 1];
    const R2 = j === n ? Infinity : arr2[j];

    if (L1 <= R2 && R1 >= L2) {
      return (m + n) % 2 === 1
        ? Math.max(L1, L2)
        : (Math.max(L1, L2) + Math.min(R1, R2)) / 2;
    } else if (L1 > R2) {
      hi = i - 1;
    } else {
      lo = i + 1;
    }
  }
};

// ---- test case ----
console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(
  findMedianSortedArrays(
    [1, 2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15, 16, 17]
  )
); // 9
console.log(
  findMedianSortedArrays([1, 7, 8, 15, 20], [2, 5, 6, 11, 12, 14, 17])
); // 9.5

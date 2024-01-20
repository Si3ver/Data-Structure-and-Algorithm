/**
 * https://leetcode.cn/problems/trapping-rain-water
 * 接雨水
 *
 */

var trap = function(A) {
  const n = A.length;
  if (n < 3) return 0;

  let res = 0, maxL = 0, maxR = 0;
  let i = 0, j = n - 1;
  while (i < j) {
    if (A[i] < A[j]) {
      if (A[i] > maxL) {
        maxL = A[i];
      } else {
        res += maxL - A[i];
      }
      ++i;
    } else {
      if (A[j] > maxR) {
        maxR = A[j];
      } else {
        res += maxR - A[j];
      }
      --j;
    }
  }
  return res;
}

// ----
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

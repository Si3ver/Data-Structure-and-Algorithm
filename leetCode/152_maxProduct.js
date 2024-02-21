/**
 * https://leetcode.cn/problems/maximum-product-subarray
 * 乘极最大的子数组
 * medium
 *
 * 思路：存 min、max，因为存在负数。
 */

var maxProduct = function(A) {
  if (!Array.isArray(A) || A.length < 1) return;
  const n = A.length;
  let min = max = res = A[0];
  for (let i = 1; i < n; ++i) {
    if (A[i] < 0) [min, max] = [max, min];
    max = Math.max(max * A[i], A[i]);
    min = Math.min(min * A[i], A[i]);
    res = Math.max(res, max);
  }
  return res;
};

// ---- test case ----
console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, -1]));

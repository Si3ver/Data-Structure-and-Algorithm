/**
 * https://leetcode.cn/problems/house-robber/
 * 打家劫舍
 * medium
 *
 * f(i) = max(f(i - 1), f(i - 2) + A[i])
 */

var rob = function (A) {
  const n = A.length;
  if (n < 3) return Math.max(...A);
  let f1 = A[0], f2 = f1 > A[1] ? f1 : A[1], f3;
  for (let i = 2; i < n; ++i) {
    f3 = Math.max(f2, f1 + A[i]);
    f1 = f2;
    f2 = f3;
  }
  return f3;
}

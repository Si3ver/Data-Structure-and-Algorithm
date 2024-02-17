/**
 * https://leetcode.cn/problems/climbing-stairs
 * 爬楼梯
 * easy
 *
 * f(i) = f(i - 2) + f(i - 1);
 */

var climbStairs = function (n) {
  if (n <= 3) return n;
  let f1 = 2, f2 = 3, f3;
  for (let i = 4; i <= n; ++i) {
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
  }
  return f3;
}

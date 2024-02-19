/**
 * https://leetcode.cn/problems/perfect-squares
 * 完全平方数
 * medium
 *
 * 思路：f(i) = min(f(i), f(i - j * j) + 1)
 */

var numSquares = function(n) {
  const dp = Array(n + 1).fill().map((_, i) => i);
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; i - j * j >= 0; ++j) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
}

// ----
console.log(numSquares(12)); // 3  4 + 4 + 4
console.log(numSquares(13)); // 2  4 + 9

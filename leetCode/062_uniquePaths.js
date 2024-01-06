/**
 * https://leetcode.cn/problems/unique-paths
 * 不同路径
 * f(i, j) = f(i - 1, j) + f(i, j - 1)
 *
 */

var uniquePaths = function(m, n) {
  const dp = Array(n).fill(1);
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[j] += dp[j - 1]
    }
  }
  return dp[n - 1];
}

// ---- test case ----
console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3

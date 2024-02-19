/**
 * https://leetcode.cn/problems/minimum-path-sum/description
 * 最小路径和
 *
 * f(i, j) = A[i][j] + min(f(i - 1, j), f(i, j - 1))
 *
 *  1  3  1
 *  1  5  1
 *  4  2  1
 *
 *  1  4  5
 *  2  7  6
 *  6  8  7
 */
var minPathSum = function(A) {
  const m = A.length, n = A[0].length;
  const dp = A[0].slice();
  for (let j = 1; j < n; ++j) {
    dp[j] += dp[j - 1];
  }

  for (let i = 1; i < m; ++i) {
    dp[0] += A[i][0];
    for (let j = 1; j < n; ++j) {
      dp[j] = A[i][j] + Math.min(dp[j], dp[j - 1]);
    }
  }
  return dp[n - 1];
};

// ---- test case ----
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // 7

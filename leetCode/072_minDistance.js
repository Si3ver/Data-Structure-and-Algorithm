/**
 * https://leetcode.cn/problems/edit-distance
 *
 * 编辑距离
 * 考点：二维dp
 *
 *    0  r  o  s
 * 0  0  1  2  3
 * h  1  1  2  3
 * o  2  2  1  2
 * r  3  2  2  2
 * s  4  3  3  2
 * e  5  4  4  3
 *
 * if (s1[i] === s2[j]) {
 *    f(i, j) = f(i - 1, j - 1);
 * } else {
 *    f(i, j) = 1 + min(f(i-1, j-1), f(i-1, j), f(i, j-1))
 * }
 */

// O(mn) O(mn)
var minDistance = function(s1, s2) {
  const m = s1.length, n = s2.length;
  // 初始化 dp
  const dp = Array(m + 1).fill().map(_ => Array(n + 1).fill(0));
  for (let i = 1; i <= m; ++i) dp[i][0] = i;
  for (let j = 1; j <= n; ++j) dp[0][j] = j;

  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      // console.log(s1[i-1], s2[j-1])
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]);
      }
    }
    // console.log(i, dp);
  }
  return dp[m][n];
};

// ---- test case ----
console.log(minDistance('horse', 'ros')); // 3
// console.log(minDistance('intention', 'execution')); // 5

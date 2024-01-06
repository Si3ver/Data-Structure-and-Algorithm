/**
 * https://leetcode.cn/problems/unique-paths-ii/
 * 不同路径II
 *
 * if(障碍物)
 *    f(i, j) = 0;
 * else
 *    f(i, j) = f(i - 1, j) + f(i, j - 1);
 *
 * case 1: o(i, j)
 * 0  0  0
 * 0  1  0
 * 0  0  0
 *
 * f(i, j)
 * 1  1  1
 * 1  0  1
 * 1  1  2
 *
 * case 2: o(i, j)
 * 0  1  0
 * 0  0  0
 * 0  0  0
 *
 * 1  0  0
 * 1  1  1
 * 1  2  3
 *
 * case 3
 * 0  0
 * 1  0
 *
 * 1  1
 * 0  1
 *
 * case 4
 * 0  0
 * 1  1
 * 0  0
 *
 * 1  1
 * 0  0
 * 0  0
 */

var uniquePathsWithObstacles = function(A) {
  const m = A.length, n = A[0].length;
  if (m < 1 || n < 1 || A[0][0] === 1 || A[m - 1][n - 1] === 1) return 0;

  const obsIdx = A[0].indexOf(1);
  // 初始化 dp
  const dp = Array(n).fill(1);
  const hasObs = obsIdx !== -1;
  if (hasObs) {
    for (let i = obsIdx; i < n; ++i) {
      dp[i] = 0;
    }
  }

  for (let i = 1; i < m; ++i) {
    if (dp[0] != 0) {  // 处理第一列
      dp[0] = 1 - A[i][0];
    }
    for (let j = 1; j < n; ++j) {
      if (A[i][j] === 1) {
        dp[j] = 0;
      } else {
        dp[j] += dp[j - 1];
      }
    }
  }
  return dp[n - 1];
};

// ---- test case ----
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])); // 2
console.log(uniquePathsWithObstacles([[0, 1, 0], [0, 0, 0], [0, 0, 0]])); // 3
console.log(uniquePathsWithObstacles([[0, 0], [1, 0]])); // 1
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]])); // 1
console.log(uniquePathsWithObstacles([[0,0],[1,1],[0,0]])); // 0

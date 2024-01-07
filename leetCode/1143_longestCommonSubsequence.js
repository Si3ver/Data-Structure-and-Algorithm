/**
 * https://leetcode.cn/problems/longest-common-subsequence/description
 * 最长公共子序列
 *
 *    0  a  b  c  d  e
 * 0  0  0  0  0  0  0
 * a  0  1  1  1  1  1
 * c  0  1  1  2  2  2
 * e  0  1  1  2  2  3
 *
 * f(i, j) = s1=[i] === s2[j] ? f(i-1, j-1) + 1 : max(f(i-1, j), f(i, j - 1));
 * */

// O(mn) O(mn)
var longestCommonSubsequence = function(s1, s2) {
  const m = s1.length, n = s2.length;
  const dp = Array(m + 1).fill(0).map(_ => Array(n + 1).fill(0));

  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
};

// O(mn) O(m)
// var longestCommonSubsequence = function(s1, s2) {
//   const m = s1.length, n = s2.length;
//   const dp = Array(m + 1).fill(0);

//   for (let i = 1; i <= m; ++i) {
//     let cache = 0;
//     for (let j = 1; j <= n; ++j) {
//       let temp = dp[j];
//       if (s1[i - 1] === s2[j - 1]) {
//         dp[j] = cache + 1;
//       } else {
//         dp[j] = Math.max(dp[j], dp[j - 1]);
//       }
//       cache = temp;
//     }
//   }
//   return dp[m];
// };

// ---- test case ----
console.log(longestCommonSubsequence('abcde', 'ace'));  // 3  ace
console.log(longestCommonSubsequence('abc', 'abc'));    // 3  abc
console.log(longestCommonSubsequence('abc', 'def'));    // 0

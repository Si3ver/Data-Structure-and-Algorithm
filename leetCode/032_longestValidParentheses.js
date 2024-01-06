/**
 * https://leetcode.cn/problems/longest-valid-parentheses
 * “最长”有效括号
 *
 * 定义 dp[i] 为，必选 s[i] 时，最长有效字符串长度
 *  i 0 1 2 3 4 5
 *  s ( ) ( ( ) )
 * dp 0 2 0 0 2 6
 */

var longestValidParentheses = function(s) {
  const n = s.length;
  if (n < 2) return 0;
  const dp = Array(n).fill(0);
  let leftCnt = 0;
  for (let i = 0; i < n; ++i) {
      if (s[i] === '(') {
          ++leftCnt;
      } else if (leftCnt > 0){
          --leftCnt;
          dp[i] = dp[i - 1] + 2;
          if (i - dp[i] >= 0) {
              const prev = dp[i - dp[i]]; // 之前有效部分
              dp[i] += prev;
          }
      }
  }
  return Math.max(...dp);
};

// ---- test case ----
console.log(longestValidParentheses('(()'));
console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses(''));

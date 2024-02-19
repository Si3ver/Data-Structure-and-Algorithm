/**
 * https://leetcode.cn/problems/word-break
 * 单词拆分
 *
 *  '' l e e t c o d e
 *   T F F F T F F F T
 *
 * f(i) = ( dict.include(suffix) && f(i - j) ) ? T : F   // j 遍历后缀
 * O(n^2) O(n)
 */

var wordBreak = function(s, wordDict) {
  const wordSet = new Set(wordDict);
  const n = s.length;
  const dp = [true, ...Array(n).fill(false)];
  for (let i = 1; i <= n; ++i) {
    for (let j = i - 1; j >= 0; --j) {
      const suffix = s.slice(j, i); // 前缀 0:j-1  后缀 j: i-1
      // console.log(i, j, suffix);
      if (wordSet.has(suffix) && dp[j]) { // 后缀满足 + 前缀满足
        dp[i] = true;
        break;
      }
    }
  }
  // console.log('dp:', dp);
  return dp[n];
}

// ---- test case ----
console.log(wordBreak('leetcode', ["leet", "code"]));
// console.log(wordBreak('applepenapple', ["apple", "pen"]));
// console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));

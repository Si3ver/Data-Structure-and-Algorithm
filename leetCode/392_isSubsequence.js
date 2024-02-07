/**
 * https://leetcode.cn/problems/is-subsequence
 * 判断子序列
 * easy
 */

var isSubsequence = function (s, t) {
  const m = s.length, n = t.length;
  let i = 0, j = 0;
  while (i < m && j < n) {
    if (s[i] === t[j]) {
      ++i;
    }
    ++j;
  }
  return i === m;
}

// ----
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false

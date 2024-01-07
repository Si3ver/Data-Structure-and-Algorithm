/**
 * https://leetcode.cn/problems/longest-palindromic-substring/description
 * 最长回文子串
 *
 */

// 方案一：中心扩散法 O(n^2) 👈 选这个就好
var longestPalindrome1 = function(s) {
  const n = s.length;
  if (n < 1) return '';

  function expand(s, lo, hi) {
    while (lo >= 0 && hi <= s.length && s[lo] === s[hi]) {
      --lo;
      ++hi;
    }
    return hi - lo - 1;
  }

  let start = 0, end = 0;
  for (let i = 0; i < n; ++i) {
    const len1 = expand(s, i, i);
    const len2 = expand(s, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > end - start + 1) {
      // console.log(len1, len2, i);
      start = i - ((len - 1) >> 1);
      end = i + ((len >> 1));
    }
  }
  return s.slice(start, end + 1);
};

// 方案二：DP O(n^2)
// var longestPalindrome2 = function(s) {
//   const n = s.length;
//   if (n < 1) return '';
//   。。。
// };


// ---- test case ----
console.log(longestPalindrome1('babad')); // bab
console.log(longestPalindrome1('cbbd')); // bb

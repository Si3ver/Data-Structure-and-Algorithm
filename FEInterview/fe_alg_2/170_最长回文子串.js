/**
 * https://leetcode.cn/problems/longest-palindromic-substring
 * 005.最长回文串
 * medium
 *
 * 求一个字符串的最长回文子串，例如"212332145"的最长回文子串是"123321"
 * 思路：中心扩散法O(n^2)
 */

var longestPalindrome = function(s) {
  const n = s.length;
  if (n < 2) return s;

  const expand = (lo, hi = lo) => {
    while (lo >= 0 && hi < n && s[lo] === s[hi]) {
      --lo;
      ++hi;
    }
    return hi - lo - 1;
  };

  let start = 0, end = 0;
  for (let i = 0; i < n - 1; ++i) { // last char no need check
    const lenOdd = expand(i);
    const lenEven = expand(i, i + 1);
    const len = Math.max(lenOdd, lenEven);
    if (len > end - start + 1) {
      end = i + (len >> 1); // (lenOdd - 1) / 2 or lenEven / 2
      start = i - ((len - 1) >> 1); // (lenOdd - 1) / 2 or (lenEven - 2) / 2
    }
  }
  return s.slice(start, end + 1);
};

// ---- test cases ----
console.log(longestPalindrome('212332145')); // 123321
console.log(longestPalindrome('babad')); // 'bab'
console.log(longestPalindrome('cbbd')); // 'bb'

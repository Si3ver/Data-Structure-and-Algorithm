/**
 * https://leetcode.cn/problems/valid-palindrome
 * 验证回文串
 * easy
 */

function isPalindrome(s) {
  const t = s.replace(/[^\da-zA-Z]/g, '').toLowerCase();
  const n = t.length;
  let lo = 0, hi = n - 1;
  while (lo < hi && t[lo] === t[hi]) {
    ++lo;
    --hi;
  }
  return lo >= hi;
}

// ---- test
console.log(isPalindrome("A man, a plan, a canal: Panama"));

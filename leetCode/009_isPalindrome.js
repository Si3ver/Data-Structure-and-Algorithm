/**
 * https://leetcode.cn/problems/palindrome-number/
 * 回文数
 * easy
 */

var isPalindrome = function(x) {
  if (x < 0) return false;
  if (x === 0) return true;
  let rev = 0, num = x;
  while (num !== 0) {
    rev = rev * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return rev === x;
};


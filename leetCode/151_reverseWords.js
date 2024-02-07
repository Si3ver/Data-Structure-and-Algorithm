/**
 * https://leetcode.cn/problems/reverse-words-in-a-string/
 * 反转字符串中的单词
 * medium
 */

// api
var reverseWords = function(s) {
  return s.trim().split(/\s+/).reverse().join(' ')
};

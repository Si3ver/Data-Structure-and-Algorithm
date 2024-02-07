/**
 * https://leetcode.cn/problems/length-of-last-word/
 * 最后一个单词的长度
 * easy
 */

// 1 api大法
var lengthOfLastWord = function (s) {
  return s.trim().split(/\s/).reverse()[0].length;
}

// 2 O(1)空间复杂度
var lengthOfLastWord = function (s) {
  let end = s.length - 1;
  while (end >= 0 && s[end] === ' ') --end;
  if (end < 0) return 0;
  let start = end;
  while (start >= 0 && s[start] !== ' ') --start;
  return end - start;
}

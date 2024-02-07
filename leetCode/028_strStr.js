/**
 * https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * 找出字符串中第一个匹配项的下标
 * easy
 */

// 1 api 大法
var strStr = function(s1, s2) {
  return s1.indexOf(s2);
};

// 2. KMP 算法 O(m + n)


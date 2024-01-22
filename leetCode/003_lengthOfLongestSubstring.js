/**
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters
 * 无重复字符的最长子串
 * medium
 *
 * 思路：使用 map 记录字母出现的最新下标
 */

var lengthOfLongestSubstring = function(s) {
  const map = new Map();

  let maxLen = 0;
  let start = 0;
  for (let i = 0; i < s.length; ++i) {
    if (map.has(s[i]) && map.get(s[i]) >= start) {
      start = map.get(s[i]) + 1; // ! 新起点：记录处（重复处）的下一个
    }
    map.set(s[i], i);
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

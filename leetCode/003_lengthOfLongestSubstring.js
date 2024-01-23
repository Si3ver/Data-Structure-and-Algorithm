/**
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters
 * 无重复字符的最长子串
 * medium
 *
 * 思路：使用 map 记录字母出现的最新下标
 */

var lengthOfLongestSubstring = function(s) {
  const m = new Map();
  let maxLen = 0, start = 0;
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    if (m.has(ch) && start <= m.get(ch)) {
      start = m.get(ch) + 1;
    }
    m.set(ch, i);
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

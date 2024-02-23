/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * 03. 无重复字符的最长子串
 * medium
 *
 * 思路：hashmap + 快慢指针
 *      map 存储字符最后一次出现的下标
 */
var lengthOfLongestSubstring = function(s) {
  const map = new Map();
  let maxLen = 0, start = 0;
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    if (map.has(ch) && map.get(ch) >= start) {
      start = map.get(ch) + 1;
    }
    map.set(ch, i);
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

// ---- test case ----
console.log(lengthOfLongestSubstring("abcabcbb")); // 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
console.log(lengthOfLongestSubstring("bbbbb")); // 因为无重复字符的最长子串是 "b"，所以其长度为 1。
console.log(lengthOfLongestSubstring("pwwkew")); // 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
console.log(lengthOfLongestSubstring("dvdf")); // 因为无重复字符的最长子串是 "vdf"，所以其长度为 3。
console.log(lengthOfLongestSubstring("asjrgapa")); // 因为无重复字符的最长子串是 "sjrgap"，所以其长度为 6。
console.log(lengthOfLongestSubstring("aabaab!bb")); // 因为无重复字符的最长子串是 "ab!"，所以其长度为 3。
console.log(lengthOfLongestSubstring("abcb")); // 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
console.log(lengthOfLongestSubstring("asljlj")); // 因为无重复字符的最长子串是 "aslj"，所以其长度为 4。
console.log(lengthOfLongestSubstring("qwnfenpglqdq")); // 因为无重复字符的最长子串是 "fenpglqd"，所以其长度为 8

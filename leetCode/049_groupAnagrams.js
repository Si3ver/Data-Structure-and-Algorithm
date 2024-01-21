/**
 * https://leetcode.cn/problems/group-anagrams
 * 字母异位词分组
 * medium
 */

var groupAnagrams = function(strs) {
  const startIdx = 'a'.codePointAt(0);
  const map = new Map();
  for (const str of strs) {
    const cntArr = Array(26).fill(0);
    for (let i = 0; i < str.length; ++i) {
      cntArr[str.codePointAt(i) - startIdx]++;
    }
    const key = cntArr.join();
    map.set(key, [...(map.get(key) || []), str]);
  }
  return Array.from(map.values());
};

// ----
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

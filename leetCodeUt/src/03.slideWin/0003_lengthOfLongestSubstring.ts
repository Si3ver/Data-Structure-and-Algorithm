// 思路：使用 map 记录字母出现的最新下标，如果当前字母下标比之前大，则说明之前字母重复了
// 1. 遍历字符串，如果当前字母在 map 中存在，则说明之前出现过，更新 maxLen 和 map[s[i]] = i;
// 2. 如果当前字母不在 map 中，则说明之前没有出现过，直接更新 maxLen 和 map[s[i]] = i;
// 3. 返回 maxLen
// 4. 复杂度分析：时间 O(n) 空间 O(n)

// -> 01.map
export function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>();
  let maxLen = 0;
  for (let i = 0, start = 0; i < s.length; ++i) {
    if (map.has(s[i])) {
      start = Math.max(start, map.get(s[i])! + 1);
    }
    map.set(s[i], i);
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

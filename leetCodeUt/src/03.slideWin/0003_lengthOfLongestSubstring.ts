// 核心思路：利用 map 记录字符的最新位置，算出 start，长度即 i - start + 1
// 复杂度分析：时间复杂度 O(n) 空间复杂度 O(n)

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

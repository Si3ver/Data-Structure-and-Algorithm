// 思路：滑动窗口
//  trick: 滑动窗口的遍历，每次需要删除一个字符
// 复杂度：
//  时间 O(m + n)
//  空间 O(n)

export function findAnagrams(s: string, p: string): number[] {
  const m = s.length, n = p.length;
  if (m < n) return [];

  const needMap = new Map<string, number>();
  for(const ch of p) {
    needMap.set(ch, (needMap.get(ch) || 0) + 1);
  }

  const res: number[] = [], winMap = new Map<string, number>();
  for (let i = 0, start = 0, count = 0; i < m; ++i) {
    if (needMap.has(s[i])) {
      winMap.set(s[i], (winMap.get(s[i]) || 0) + 1);
      if (winMap.get(s[i]) === needMap.get(s[i])) {
        ++count;
      }
    } else {
      winMap.clear();
      start = i + 1;
      count = 0;
      continue;
    }

    if (i - start + 1 === n) {
      if (count === needMap.size) {
        res.push(start);
      }
      // update winMap,start,count
      if (winMap.get(s[start]) === needMap.get(s[start])) {
        --count;
      }
      winMap.set(s[start], (winMap.get(s[start]) || 0) - 1);
      ++start;
    }
  }
  return res;
};

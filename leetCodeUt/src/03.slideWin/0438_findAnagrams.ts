// 思路：滑动窗口
//  trick: 滑动窗口的遍历，每次需要删除一个字符
// 复杂度：
//  时间 O(m + n)
//  空间 O(n)


// 方案一：双 map，先计算 needMap，并持续维护 winMap、start、count
export function findAnagrams1(s: string, p: string): number[] {
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

// 方案二：单 map 法（账本清零法）
// Step1: 欠债，遍历p, 统计所有债务
// Step2: 右指针先走 p.length 步，更新账本
// Step3: 双指针同步走，更新账本

export function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) return [];
  const depts = new Map<string, number>();
  for (const ch of p) {
    depts.set(ch, (depts.get(ch) || 0) - 1);
  }
  let r = 0;
  for (; r < p.length; ++r) {
    depts.set(s[r], (depts.get(s[r]) || 0) + 1);
  }
  const res: number[] = [];
  for (let l = 0; r <= s.length; ++l, ++r) {
    if (([...depts.values()].every(v => v === 0))) {
      res.push(l);
    }
    depts.set(s[l], (depts.get(s[l]) || 0) - 1);
    depts.set(s[r], (depts.get(s[r]) || 0) + 1);
  }
  return res;
};

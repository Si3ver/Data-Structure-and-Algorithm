// 思路：双指针，左边界右移，窗口增加元素，如果需求全部满足了，右边界右移，窗口减少元素
export function minWindow(s: string, t: string): string {
  if (!s || !t) return "";

  // 用 need<Map> 统计字符串 t
  const need = new Map();
  for (const ch of t) {
    const cnt = (need.get(ch) || 0) + 1;
    need.set(ch, cnt);
  }

  let start = 0,
    minSize = Infinity,
    needCnt = t.length;
  for (let i = 0, j = 0; j < s.length; ++j) {
    // Step1: 右边界右移，窗口增加元素
    const jChar = s[j];
    if (need.has(jChar)) {
      if (need.get(jChar) > 0) {
        // !! 这个 if 很关键，减到零之后，就不管了
        --needCnt;
      }
      need.set(jChar, need.get(jChar) - 1); // 需求被满足了，减少1
    }

    // Step2: 如果需求全部满足了，左边界右移，窗口减少元素，尝试寻找最短 str
    if (needCnt === 0) {
      let iChar = s[i];
      while (!need.has(iChar) || need.get(iChar) < 0) {
        // 有富余，尽管移
        if (need.has(iChar)) {
          need.set(iChar, need.get(iChar) + 1);
          // ++needCnt;
        }
        ++i;
        iChar = s[i];
      }
      // console.log(i, j, start, minSize, s.slice(start, start + minSize), need, needCnt)
      if (j - i + 1 < minSize) {
        // 找到了满足条件的
        minSize = j - i + 1;
        start = i;
      }
      // Step3: 左边界再多右移 1 位，让窗口不满足条件
      need.set(iChar, need.get(iChar) + 1);
      ++needCnt;
      ++i;
    }
  }
  return minSize === Infinity ? "" : s.slice(start, start + minSize);
}

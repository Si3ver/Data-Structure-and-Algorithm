/**
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string
 * 找到字符串中所有字母异位词
 * medium
 */

var findAnagrams = function (s, p) {
  const need = new Map();
  for (const ch of p) {
    need.set(ch, (need.get(ch) || 0) + 1);
  }

  const res = [], wind = new Map(), size = p.length;
  let count = 0, start = 0;
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    // console.log(ch, start, need, wind)
    if (need.has(ch)) {
      // add into wind & update count
      wind.set(ch, (wind.get(ch) || 0) + 1);
      if (wind.get(ch) === need.get(ch)) {
        ++count;
      }
    } else {
      // clear wind
      wind.clear();
      count = 0;
      start = i + 1;
      continue;
    }

    // check result
    if (i - start + 1 === size) {
      if (count === need.size) {
        res.push(start);
      }
      // wind left bound - 1
      const sCh = s[start];
      ++start;
      if (wind.get(sCh) === need.get(sCh)) {
        --count;
      }
      wind.set(sCh, wind.get(sCh) - 1);
    }
  }
  return res;
}

// ----
console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));


/**
 * https://leetcode.cn/problems/roman-to-integer/
 * 罗马数字转整数
 * easy
 */

var romanToInt = function (s) {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let res = 0;
  for (let i = 0; i < s.length; ++i) {
    const curr = map.get(s[i]);
    const next = i === s.length - 1 ? 0 : map.get(s[i + 1]);
    if (curr < next) {
      res -= curr;
    } else {
      res += curr;
    }
  }
  return res;
}

/**
 * https://leetcode.cn/problems/zigzag-conversion/
 * Z 字形变换
 * medium
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 */

const convert = function (s, numRows) {
  if (numRows < 2) return s;

  const rows = Array(numRows).fill().map(_ => []);
  let flag = -1, i = 0;
  for (const ch of s) {
    rows[i].push(ch);
    if (i === 0 || i === numRows - 1) flag = -flag; // 首行和末行调头
    i += flag;
  }
  return rows.reduce((a, b) => a.concat(b)).join('');
}

// ----
console.log(convert('PAYPALISHIRING', 3))

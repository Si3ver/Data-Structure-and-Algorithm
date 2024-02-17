/**
 * https://leetcode.cn/problems/pascals-triangle
 *
 * 杨辉三角
 *
 * easy
 */

var generate = function (numRows) {
  const res = [];
  for (let i = 0; i < numRows; ++i) {
    const row = Array(i + 1).fill(1);
    for (let j = 1; j < i; ++j) {
      row[j] = res[i - 1][j - 1] + res[i - 1][j];
    }
    res.push(row);
  }
  return res;
}

// ----
console.log(generate(5));
/*
row
 0    1
 1    1 1
 2    1 2 1
 3    1 3 3 1
 4    1 4 6 4 1
*/

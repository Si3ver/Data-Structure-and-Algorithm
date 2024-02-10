/**
 * https://leetcode.cn/problems/number-of-islands/
 * 岛屿数量
 * medium
 */

var numIslands = function (A) {
  const m = A.length, n = A[0].length;
  const dfsMarking = (i, j) => {
    if (i >= 0 && i < m && j >= 0 && j < n && A[i][j] === '1') {
      A[i][j] = '0';
      dfsMarking(i + 1, j);
      dfsMarking(i - 1, j);
      dfsMarking(i, j + 1);
      dfsMarking(i, j - 1);
    }
  }

  let count = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (A[i][j] === '1') {
        ++count;
        dfsMarking(i, j);
      }
    }
  }
  return count;
}

/**
 * https://leetcode.cn/problems/set-matrix-zeroes
 * 矩阵置零
 * medium
 */

var setZeroes = function (A) {
  const m = A.length, n = A[0].length;
  let isFirstRowHasZero = false, isFirstColHasZero = false;
  for (let i = 0; i < m; ++i) {
    if (A[i][0] === 0) {
      isFirstColHasZero = true;
      break;
    }
  }
  for (let j = 0; j < n; ++j) {
    if (A[0][j] === 0) {
      isFirstRowHasZero = true;
      break;
    }
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      if (A[i][j] === 0) {
        A[i][0] = 0;
        A[0][j] = 0;
      }
    }
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      if (A[i][0] === 0 || A[0][j] === 0) {
        A[i][j] = 0;
      }
    }
  }
  if (isFirstColHasZero) {
    for (let i = 0; i < m; ++i) {
      A[i][0] = 0;
    }
  }
  if (isFirstRowHasZero) {
    for (let j = 0; j < n; ++j) {
      A[0][j] = 0;
    }
  }
}

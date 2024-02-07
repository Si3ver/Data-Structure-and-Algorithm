/**
 * https://leetcode.cn/problems/rotate-image/
 * 旋转图像
 * medium
 *
 * 7  4  1
 * 8  5  2
 * 9  6  3
 */

var rotate = function(A) {
  const n = A.length, I = n >> 1, J = (n + 1) >> 1;
  for (let i = 0; i < I; ++i) {
    for (let j = 0; j < J; ++j) {
      const tmp = A[i][j];
      A[i][j] = A[n - 1 - j][i];
      A[n - 1 - j][i] = A[n - 1 - i][n - 1 - j];
      A[n - 1 - i][n - 1 - j] = A[j][n - 1 - i];
      A[j][n - 1 - i] = tmp;
    }
  }
};

// ----
const A1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(A1);
console.log(A1);

const A2 = [
  [ 5,  1,  9, 11],
  [ 2,  4,  8, 10],
  [13,  3,  6,  7],
  [15, 14, 12, 16],
];
rotate(A2);
console.log(A2);

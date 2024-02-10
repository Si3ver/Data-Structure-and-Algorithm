/**
 * https://leetcode.cn/problems/search-a-2d-matrix-ii
 * 搜索二维矩阵II
 * medium
 *
 * 思路：从右上角查找
 */

var searchMatrix = function (A, target) {
  const m = A.length, n = A[0].length;
  let i = 0, j = n - 1;
  while (i <= m - 1 && j >= 0) {
    const val = A[i][j];
    if (val === target) {
      return true;
    } else if (val < target) {
      ++i;
    } else {
      --j;
    }
  }
  return false;
}

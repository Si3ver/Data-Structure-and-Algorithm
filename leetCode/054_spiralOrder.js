/**
 * https://leetcode.cn/problems/spiral-matrix/
 * 螺旋矩阵
 * medium
 *
 * visited + dj\dj。 撞了墙就回头
 */

var spiralOrder = function(A) {
  const m = A.length, n = A[0].length,
      CNT = m * n, res = [],
      visited = Array(m).fill().map(_ => Array(n).fill(false));
  let i = 0, j = 0, direction = 0;
  const di = [0, 1, 0, -1];
  const dj = [1, 0, -1, 0];
  while (res.length !== CNT) {
    res.push(A[i][j]);
    visited[i][j] = true;
    let nextI = i + di[direction];
    let nextJ = j + dj[direction];
    if (nextI >= m || nextI < 0 || nextJ >= n || nextJ < 0 || visited[nextI][nextJ]) {
      direction = (direction + 1) % 4;
      nextI = i + di[direction];
      nextJ = j + dj[direction];
    }
    i = nextI;
    j = nextJ;
  }
  return res;
};

// ----
console.log(spiralOrder(
  [
    [ 1, 2, 3, 4],
    [ 5, 6, 7, 8],
    [ 9,10,11,12]
  ]
));

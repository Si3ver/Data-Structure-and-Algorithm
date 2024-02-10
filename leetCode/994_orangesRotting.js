/**
 * https://leetcode.cn/problems/rotting-oranges/
 * 腐烂的橘子
 * medium
 *
 *
 */

var orangesRotting = function(A) {
  const m = A.length, n = A[0].length, queue = [];
  let freshCount = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (A[i][j] === 1) {
        ++freshCount;
      } else if (A[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  const infect = (r, c) => {
    if (r >= 0 && r < m && c >= 0 && c < n && A[r][c] === 1) {
      A[r][c] = 2;
      --freshCount;
      queue.push([r, c]);
    }
  }
  let round = 0;
  while (freshCount && queue.length) {
    ++round;
    const size = queue.length;
    for (let i = 0; i < size; ++i) {
      const [r, c] = queue.shift();
      infect(r + 1, c);
      infect(r - 1, c);
      infect(r, c + 1);
      infect(r, c - 1);
    }
  }
  return freshCount > 0 ? -1 : round;
};

// ----
console.log(orangesRotting([
  [1, 2]
]));

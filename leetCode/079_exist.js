/**
 * https://leetcode.cn/problems/word-search
 * 单词搜素
 *
 * 思路：dfs + 回溯
 */
var exist = function(A, word) {
  const m = A.length, n = A[0].length;
  const used = Array(m).fill().map(_ => Array(n).fill(false));
  const dfs = (row, col, i) => {
    // terminator
    if (i === word.length) return true;
    if (row < 0 || row >= m || col < 0 || col >= n) return false;
    if (used[row][col] || A[row][col] !== word[i]) return false;
    // process
    used[row][col] = true;
    // drill down
    const isFind = dfs(row + 1, col, i + 1) || dfs(row - 1, col, i + 1) || dfs(row, col + 1, i + 1) || dfs(row, col - 1, i + 1);
    if (isFind) return true;
    // revert status
    used[row][col] = false;
    return false;
  }
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (A[i][j] === word[0] && dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

var exist = function (A, word) {

  const dfs = (index, row, col) => {
    if (index === word.length) return true;
    if (row < 0 || row >= m || col < 0 || col >= n) return false;
    if (used[row][col] || A[row][col] !== word[index]) return false;
    used[row][col] = true;
    const isFind = dfs(index + 1, row + 1, col) || dfs(index + 1, row - 1, col) || dfs(index + 1, row, col + 1) || dfs(index + 1, row, col - 1);
    if (isFind) return true;
    used[row][col] = false;
    return false;
  }

  const m = A.length, n = A[0].length;
  const used = Array(m).fill().map(_ => Array(n).fill(false));
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (A[i][j] === word[0] && dfs(0, i, j)) {
        return true;
      }
    }
  }
  return false;
}

// ---- test case ----
console.log(exist([["A","B","C","E"],
                   ["S","F","C","S"],
                   ["A","D","E","E"]], 'ABCCED')); // true
console.log(exist([["A","B","C","E"],
                   ["S","F","C","S"],
                   ["A","D","E","E"]], 'SEE')); // true
console.log(exist([["A","B","C","E"],
                   ["S","F","C","S"],
                   ["A","D","E","E"]], 'ABCB')); // false

/**
 * https://leetcode.cn/problems/n-queens
 * N皇后
 *
 * 思路：位运算 + 回溯
 */

/* eg: res = [
              [4, 1, 8, 2],
              [2, 8, 1, 4],
            ]
       graphs = [
         [
            '.Q..',
            '...Q',
            'Q...',
            '..Q.',
         ],
         [
           '..Q.',
           'Q...',
           '...Q',
           '.Q..',
         ],
       ]
*/
// function buildResult(res, n) {
//   const graphs = [];
//   res.forEach(state => {
//     const graph = [];
//     state.forEach(bit => {
//       const lineStr = bit.toString(2).padStart(n, '.');
//       graph.push(lineStr.replaceAll('0', '.').replaceAll('1', 'Q'));
//     })
//     graphs.push(graph);
//   });
//   return graphs;
// }

var buildResult = (res, n) =>
  res.map(
    arr => arr.map(
      num => num.toString(2).padStart(n, '.')
             .replaceAll('0', '.')
             .replaceAll('1', 'Q')
    )
  );

console.log([
  [4, 1, 8, 2],
  [2, 8, 1, 4],
], 4);

var solveNQueens = function (n) {
  if (n < 1) return [];

  /**
   * @param {number} row 当前遍历到第 row 行
   * @param {number} col 不能使用的列
   * @param {number} pie 不能使用的撇
   * @param {number} na  不能使用的捺
   * @param {number[]} path
   */
  const dfs = (row, col, pie, na, path) => {
    // terminator
    if (row >= n) {
      res.push(path);
      return;
    }
    // process
    let bits = (~(col | pie | na)) & ((1 << n) - 1); // 所有可用位置
    while (bits) {
      const pos = bits & (-bits); // 最右的可用位置
      bits = bits & (bits - 1); // 最右可用位置0
      // drill down
      dfs(row + 1, col | pos, (pie | pos) << 1, (na | pos) >> 1, path.concat([pos]));
    }
  }
  const res = [];
  dfs(0, 0, 0, 0, []);
  // console.log(res)
  return buildResult(res, n);
}

// ---- test case ----
console.log(solveNQueens(4));
console.log(solveNQueens(1));

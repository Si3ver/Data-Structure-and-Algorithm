/**
 * https://leetcode.cn/problems/subsets/
 * 子集
 * medium
 */

var subsets = function (arr) {
  const dfs = (level, path) => {
    // terminator
    if (level === arr.length) {
      res.push(path.slice());
      return;
    }
    // process && dirll down (pick or not pick arr[level])
    dfs(level + 1, path);
    path.push(arr[level]);
    dfs(level + 1, path);
    // revert status
    path.pop();
  }
  const res = [];
  dfs(0, []);
  return res;
}

// ----
console.log(subsets([1, 2, 3]));

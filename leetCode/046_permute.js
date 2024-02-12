/**
 * https://leetcode.cn/problems/rotate-image/
 * 全排列
 * medium
 */

var permute = function (arr) {
  const dfs = (path, remain) => {
    // terminator
    if (!remain.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < remain.length; ++i) {
      // process
      const [val] = remain.splice(i, 1);
      path.push(val);
      // drill down
      dfs(path, remain);
      // revert status
      path.pop();
      remain.splice(i, 0, val);
    }
  }
  const res = [];
  dfs([], arr);
  return res;
}

// ----
console.log(permute([1, 2, 3]));

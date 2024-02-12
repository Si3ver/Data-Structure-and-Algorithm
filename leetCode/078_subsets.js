/**
 * https://leetcode.cn/problems/subsets/
 * 子集
 * medium
 */

var subsets = function(arr) {
  const dfs = (index, path) => {
    // terminator
    if (index === arr.length) {
      res.push(path.slice());
      return;
    }
    // drilldown
    dfs(index + 1, path); // 选
    dfs(index + 1, [...path, arr[index]]); // 不选
  }
  const res = [];
  dfs(0, []);
  return res;
};

// ----
console.log(subsets([1, 2, 3]));

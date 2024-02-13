/**
 * https://leetcode.cn/problems/combination-sum
 *
 * 组合总和(可重复使用)
 *
 * 考点：dfs + 回溯
 */

// 最朴素不剪枝 O(n)
var combinationSum = function (candidates, target) {
  const dfs = (target, path, idx) => {
    if (idx === candidates.length) {
      return;
    }
    if (target === 0) {
      res.push(path);
      return;
    }
    dfs(target, path, idx + 1); // case1: 跳过不用 candidates[i]
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...path, candidates[idx]], idx); // case2: 使用 candidates[idx]
    }
  };

  const res = [];
  dfs(target, [], 0);
  return res;
};

var combinationSum = function(candidates, target) {
  const dfs = (index, path, target) => {
    if (index === candidates.length) return;
    if (target === 0) {
      res.push(path);
      return;
    }
    dfs(index + 1, path, target);
    if (target >= candidates[index]) {
      dfs(index, [...path, candidates[index]], target - candidates[index]); // 可以重复选，index不变
    }
  }
  const res = [];
  dfs(0, [], target);
  return res;
};

// ---- test case ----
console.log(combinationSum([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]]
console.log(combinationSum([2,3,5], 8)); // [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
console.log(combinationSum([2], 1)); // []

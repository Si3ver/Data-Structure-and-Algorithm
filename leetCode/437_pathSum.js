/**
 * https://leetcode.cn/problems/path-sum-iii/description
 * 路径总和III
 */

var pathSum = function(root, targetSum) {
  const dfs = (root, preSum) => {
    // terminator
    if (!root) return 0;

    // process
    map.set(preSum, (map.get(preSum) || 0) + 1);
    let target = preSum + root.val;
    res += map.get(target - targetSum) || 0

    // drill down
    dfs(root.left, target);
    dfs(root.right, target);

    // revert status
    map.set(preSum, map.get(preSum) - 1);
  }

  const map = new Map();
  let res = 0;
  dfs(root, 0);
  return res;
}

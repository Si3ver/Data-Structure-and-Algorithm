import { _tree } from './tree.js';
/**
 * https://leetcode.cn/problems/path-sum-iii/description
 * 路径总和III
 *
 * 思路：路径 = 前缀和之差。 dfs 的过程中用 map 存前缀和，dfs 遍历过程中去匹配是否满足条件
 * map<k, v>: k 存前缀和，v 存“这个前缀和的节点数量”
 *
 * tree:
 *         10
 *       /    \
 *     5       -3
 *    /  \        \
 *   3    2        11
 *  /  \    \
 * 3    -2   1
 *
 * 前缀和：
 *         10
 *       /    \
 *     15       7
 *    /  \        \
 *   18   17        18
 *  /  \    \
 * 21   16   18
 */

var pathSum = function(root, targetSum) {
  // 计算前缀和，存储到 map
  const dfs = (root, preSum) => {
    // console.log('dfs:', root ? root.val : null, preSum, map, res);
    // terminator
    if (!root) return 0;

    // process
    map.set(preSum, (map.get(preSum) || 0) + 1);
    const target = preSum + root.val; // 新的前缀和
    res += map.get(target - targetSum) || 0;

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

// ---- test case ----
let tree = _tree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]);
console.log(tree);
console.log(pathSum(tree, 8));

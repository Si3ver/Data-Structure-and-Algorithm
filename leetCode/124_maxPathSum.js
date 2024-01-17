import { _tree } from "./tree.js";
/**
 * https://leetcode.cn/problems/binary-tree-maximum-path-sum
 * 二叉树中的最大路径和
 * hard
 */

var maxPathSum = function (root) {
  const dfs = (root) => {
    if (!root) return 0;

    const left = dfs(root.left);
    const right = dfs(root.right);

    const innerMaxSum = left + root.val + right;
    maxSum = Math.max(maxSum, innerMaxSum);

    const outputMaxSum = root.val + Math.max(0, left, right);
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  }
  let maxSum = 0;
  dfs(root);
  return maxSum;
}

// ---- test case ----
const tree = _tree([-10, 9, 20, null, null, 15, 7]);
console.log(maxPathSum(tree)); // 42

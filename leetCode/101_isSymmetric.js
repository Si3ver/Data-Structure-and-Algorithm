/**
 * https://leetcode.cn/problems/symmetric-tree/
 * 对称二叉树
 * easy
 */

var isSymmetric = function (root) {
  if (!root) return true;
  return dfs(root.left, root.right);
}

// 递归
function dfs(left, right) {
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val !== right.val) return false;
  // return dfs(left.left, left.right) && dfs(right.left, right.right);
  return dfs(left.left, right.right) && dfs(right.left, left.right);
}

/**
 * https://leetcode.cn/problems/diameter-of-binary-tree/
 * 二叉树的直径
 * easy
 */

// 思路，
// 1. 直径 = 最长路径节点数量ans - 1
// 2. 递归遍历深度 depth = max(depL, depR) + 1
// 3. ans = max(depL + depR + 1)
var diameterOfBinaryTree = function (root) {

  const depth = node => {
    if (!node) return 0;
    const depL = depth(node.left);
    const depR = depth(node.right);
    ans = Math.max(ans, depL + depR + 1);
    return Math.max(depL, depR) + 1;
  }

  let ans = 1;
  depth(root);
  return ans - 1;
}

// 改良一下：直径 = max(depL + depR)
var diameterOfBinaryTree = function(root) {
  const depth = node => {
    if (!node) return 0;
    const depL = depth(node.left);
    const depR = depth(node.right);
    max = Math.max(max, depL + depR);
    return Math.max(depL, depR) + 1;
  }

  let max = 0;
  depth(root);
  return max;
};

/**
 * https://leetcode.cn/problems/invert-binary-tree/
 * 翻转二叉树
 * easy
 */

// 递归
var invertTree = function (root) {
  // terminator
  if (!root) return root;

  // process
  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  // drill down
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

// queue + bfs
var invertTree = function (root) {
  if (!root) return root;
  let queue = [root];
  while (queue.length) {
    const node = queue.pop();
    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    if (node.left) {
      queue.unshift(node.left);
    }
    if (node.right) {
      queue.unshift(node.right);
    }
  }
  return root;
}

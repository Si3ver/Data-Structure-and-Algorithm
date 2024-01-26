/**
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/
 * 二叉树的层序遍历
 * medium
 */

// queue + bfs
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root], res = [];
  while (queue.length) {
    const size = queue.length, line = [];
    for (let i = 0; i < size; ++i) {
      const node = queue.pop();
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
      line.push(node.val);
    }
    res.push(line);
  }
  return res;
}

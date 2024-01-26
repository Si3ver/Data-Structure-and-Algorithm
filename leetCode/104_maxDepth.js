/**
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/
 * 二叉树的最大深度
 * easy
 */

// 递归
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right))  + 1;
}

// queue + BFS
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let count = 0;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; ++i) {
      const node = queue.pop();
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }
    ++count;
  }
  return count;
}

// stack + dfs
var maxDepth = function (root) {
  if (!root) return 0;
  const stack = [root], level = [1];
  let max = 0;
  while (stack.length) {
    const node = stack.pop();
    const lv = level.pop();
    max = Math.max(max, lv);
    if (node.right) {
      stack.push(node.right);
      level.push(lv + 1);
    }
    if (node.left) {
      stack.push(node.left);
      level.push(lv + 1);
    }
  }
  return max;
}

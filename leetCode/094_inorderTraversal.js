/**
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/
 * 二叉树的中序遍历
 * easy
 */

// 递归
var inorderTraversal = function (root) {
  if (!root) return [];
  const left = inorderTraversal(root.left);
  const right = inorderTraversal(root.right);
  return [...left, root.val, ...right]
}

// var inorderTraversal = function (root) {
//   if (!root) return [];
//   const dfs = p => {
//     if (p.left) dfs(p.left);
//     res.push(p.val);
//     if (p.right) dfs(p.right);
//   }
//   const res = [];
//   dfs();
//   return res;
// }


// 非递归
var inorderTraversal = function(root) {
  if (root == null) return [];
  const res = [], stack = [];
  while (root || stack.length) {
      while (root) { // 往左找到底
          stack.push(root);
          root = root.left;
      }
      root = stack.pop(); // 根
      res.push(root.val);
      root = root.right;  // 右
  }
  return res;
};


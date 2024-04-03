// 递归写法
export function inorderTraversal(root: TreeNode | null): number[] {
  if (root == null) return [];
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};

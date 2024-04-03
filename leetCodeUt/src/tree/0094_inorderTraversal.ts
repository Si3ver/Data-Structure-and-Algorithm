// 迭代（非递归）写法
export function inorderTraversal(root: TreeNode | null): number[] {
  if (root == null) return [];
  const stack: TreeNode[] = [], res: number[] = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop() as TreeNode;
    res.push(root.val);
    root = root.right;
  }
  return res;
};

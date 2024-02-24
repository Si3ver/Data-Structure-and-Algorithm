// 实现一颗二叉搜索树 & 遍历
// 144.前序遍历 https://leetcode.cn/problems/binary-tree-preorder-traversal
// 094.中序遍历 https://leetcode.cn/problems/binary-tree-inorder-traversal
// 145.后序遍历 https://leetcode.cn/problems/binary-tree-postorder-traversal
// 102.层序遍历 https://leetcode.cn/problems/binary-tree-level-order-traversal/description/

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    if (!this.root) {
      this.root = new TreeNode(val);
    } else {
      let node = this.root;
      while (true) {
        if (val > node.val) {
          if (node.right) {
            node = node.right;
          } else {
            node.right = new TreeNode(val);
            break;
          }
        } else {
          if (node.left) {
            node = node.left;
          } else {
            node.left = new TreeNode(val);
            break;
          }
        }
      }
    }
  }
  // 递归版前序 dfs
  preOrderEasy() {
    if (!this.root) return [];
    const dfs = (node) => {
      res.push(node.val);
      if (node.left) dfs(node.left);
      if (node.right) dfs(node.right);
    }
    const res = [];
    dfs(this.root);
    return res;
  }
  // 非递归版前序
  preOrder() {
    if (!this.root) return [];
    const res = [], stack = [this.root];
    while (stack.length) {
      const p = stack.pop();
      res.push(p.val);
      if (p.right) stack.push(p.right);
      if (p.left) stack.push(p.left);
    }
    return res;
  }
  // 递归版中序 dfs
  inOrderEasy() {
    if (!this.root) return [];
    const dfs = (node) => {
      if (node.left) dfs(node.left);
      res.push(node.val);
      if (node.right) dfs(node.right);
    }
    const res = [];
    dfs(this.root);
    return res;
  }
  // 非递归版中序
  inOrder() {
    if (!this.root) return [];
    const res = [], stack = [];
    let node = this.root;
    while (stack.length || node) {
      while (node) {
        stack.push(node);
        node = node.left;
      }
      node = stack.pop();
      res.push(node.val);
      node = node.right;
    }
    return res;
  }
  // 递归版后序 dfs
  postOrderEasy() {
    if (!this.root) return [];
    const dfs = (node) => {
      if (node.left) dfs(node.left);
      if (node.right) dfs(node.right);
      res.push(node.val);
    }
    const res = [];
    dfs(this.root);
    return res;
  }
  levelOrder() {
    if (!this.root) return [];
    const queue = [this.root], res = [];
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
}

// 测试代码
/**
 *         10
 *      /      \
 *    3         18
 *   / \       /  \
 *  2   4     13   21
 *       \
 *         9
 *        /
 *       8
 *        \
 *         9
 */
var bst = new BST();
var arr = [10, 3, 18, 2, 4, 13, 21, 9, 8, 9];
for (var i = 0; i < arr.length; i++) {
  bst.insert(arr[i]);
}
// console.log(bst)
console.log('preEasy:', bst.preOrderEasy());
console.log('pre:', bst.preOrder());
console.log('inEasy', bst.inOrderEasy());
console.log('in', bst.inOrder());
console.log('postEasy', bst.postOrderEasy());
console.log('level', bst.levelOrder());

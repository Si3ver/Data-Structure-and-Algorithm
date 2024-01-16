function TreeNode(val, left, right) {
  this.val   = (  val === undefined ?    0 :   val);
  this.left  = ( left === undefined ? null :  left);
  this.right = (right === undefined ? null : right);
}

export const _tree = (arr) => {
  if (!arr.length || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  for (let i = 1; i < arr.length;) {
    let p = queue.shift();
    if (arr[i] !== null) {
      p.left = new TreeNode(arr[i]);
      queue.push(p.left);
    }
    ++i;
    if (i < arr.length && arr[i] !== null) {
      p.right = new TreeNode(arr[i]);
      queue.push(p.right);
    }
    ++i;
  }
  return root;
}

/**----------------------
 *         10
 *       /    \
 *     5       -3
 *    /  \        \
 *   3    2        11
 *  /  \    \
 * 3    -2   1
 *----------------------*/
// const ls = (tree) => console.log(JSON.stringify(tree, null, 2));
// ls(_tree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]));

// const arr = [3, 9, 20, null, null, 15, 7];
// console.log(_tree(arr));

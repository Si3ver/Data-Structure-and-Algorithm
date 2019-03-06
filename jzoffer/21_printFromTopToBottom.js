/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    if (!root) return []
    let res = [], queue = [root]
    while (queue.length) {
        let p = queue.pop()
        p && res.push(p.val)
        p.left && queue.unshift(p.left)
        p.right && queue.unshift(p.right)
    }
    return res
}
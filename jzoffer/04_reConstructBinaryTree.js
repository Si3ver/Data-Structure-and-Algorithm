/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    if (!pre.length || pre.length !== vin.length) return null;
    let rootV = pre[0], lLen = vin.indexOf(rootV),
        pre1 = pre.slice(1, lLen+1), vin1 = vin.slice(0, lLen),
        pre2 = pre.slice(lLen+1), vin2 = vin.slice(lLen+1)
    return {
        val: rootV,
        left: reConstructBinaryTree(pre1, vin1),
        right: reConstructBinaryTree(pre2, vin2)
    }
}

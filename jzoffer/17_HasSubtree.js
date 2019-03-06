/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSubtree(pRoot1, pRoot2)
{
    if (pRoot2 === null) return true
    if (pRoot1 === null) return false
    if (Math.abs(pRoot1.val - pRoot2.val) < 1e-7) {
        return isSubtree(pRoot1.left, pRoot2.left) && isSubtree(pRoot1.right, pRoot2.right)
    } else {
        return false
    }
}
function HasSubtree(pRoot1, pRoot2)
{
    if (!pRoot1 || !pRoot2) return false
    return isSubtree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
}
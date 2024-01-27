/**
 * https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree
 * 将有序数组转换成BST
 * easy
 */

// 递归，下标二分法
var sortedArrayToBST = function (arr) {
  const helper = (indexL, indexR) => {
    if (indexL > indexR) return null;
    const indexM = indexL + ((indexR - indexL) >> 1);
    return new TreeNode(arr[indexM], helper(indexL, indexM - 1), helper(indexM + 1, indexR));
  }
  return helper(0, arr.length - 1);
}

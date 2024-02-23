/**
 * https://leetcode.cn/problems/merge-sorted-array/
 * 88. 合并两个有序数组
 * easy
 */

// 解法：开个新数组 O(n) O(n)
function mergeSortedArray(arr1, arr2) {
  const m = arr1.length, n = arr2.length;
  const res = [];
  let i = 0, j = 0;
  while (i < m && j < n) {
    if (arr1[i] <= arr2[j]) {
      res.push(arr1[i++]);
    } else {
      res.push(arr2[j++]);
    }
  }
  const left = i < m ? arr1.slice(i) : arr2.slice(j);
  return [...res, ...left];
}

// leetcode解法:（leetcode 要求修改 arr1）      O(n) O(1)
var merge = function(arr1, m, arr2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) {
    arr1[k--] = arr1[i] > arr2[j] ? arr1[i--] : arr2[j--];
  }
  while (j > 0) {
    arr1[k--] = arr2[j--];
  }
}

// ---- test case ----
console.log(mergeSortedArray([2,5,6,9], [1,2,3,29]));
// 结果 [1, 2, 2, 3, 5, 6, 9, 29]


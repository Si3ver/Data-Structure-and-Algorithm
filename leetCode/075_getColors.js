/**
 * https://leetcode.cn/problems/sort-colors/
 * 颜色分类
 * medium
 *
 * 原地排序
 *
 * 思路：双指针
 */

var sortColors = function(arr) {

  const swap = (i, j) => {
    if (i !== j) {
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }

  const n = arr.length;
  let l = 0, r = n - 1;
  for (let i = 0; i < n; ++i) {
    while (i < r && arr[i] === 2) swap(i, r--);
    while (i > l && arr[i] === 0) swap(i, l++);
  }
}

// ----
const arrs = [[2, 0, 2, 1, 1, 0], [2, 0, 1]];
arrs.forEach(arr => sortColors(arr));
console.log(arrs);

// console.log(sortColors()); // [0, 0, 1, 1, 2, 2]
// console.log(sortColors([2, 0, 1])); // [0, 1, 2]

/**
 * https://leetcode.cn/problems/move-zeroes
 * 移动零
 * easy
 */

var moveZeros = function (arr) {
  const n = arr.length;
  let j = 0;
  for (let i = 0; i < n; ++i) {
    if (arr[i] !== 0) {
      arr[j++] = arr[i];
    }
  }
  while (j < n) {
    arr[j++] = 0;
  }
}

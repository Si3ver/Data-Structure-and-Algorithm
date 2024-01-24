/**
 * https://leetcode.cn/problems/rotate-array
 * 轮转数组
 * medium
 */

var rotate = function(arr, k) {
  const n = arr.length;
  k = k % n;
  arr.splice(0, 0, ...arr.splice(n - k, k))
};

// ---
var arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr);
rotate(arr, 3)
console.log(arr);

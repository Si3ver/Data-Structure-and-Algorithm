/**
 * https://leetcode.cn/problems/rotate-array
 * 轮转数组
 * medium
 */

var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  nums.splice(0, 0, ...nums.splice(-k));
}

// ---
var arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr);
rotate(arr, 3)
console.log(arr);

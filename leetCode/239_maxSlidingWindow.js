/**
 * https://leetcode.cn/problems/sliding-window-maximum/
 * 滑动窗口最大值
 * hard
 */

var maxSlidingWindow = function(arr, k) {
  const wind = [], res = [];
  for (let i = 0; i < arr.length; ++i) {
    if (wind.length && i - wind[0] >= k) { // delete queue left item
      wind.shift();
    }
    while (wind.length && arr[i] >= arr[wind[wind.length - 1]]) { // delete queue right little old items
      wind.pop();
    }
    wind.push(i);
    if (i >= k - 1) {
      res.push(arr[wind[0]]);
    }
  }
  return res;
};

// ----
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // [1]

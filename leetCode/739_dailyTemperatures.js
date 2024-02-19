/**
 * https://leetcode.cn/problems/daily-temperatures
 * 每日温度
 * medium
 *
 * 题意：求下一个更高温度出现在几天后
 * 思路：【单调栈】
 */

var dailyTemperatures = function(arr) {
  const n = arr.length;
  const stack = [], res = Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      const topIndex = stack.pop();
      res[topIndex] = i - topIndex;
    }
    stack.push(i);
  }
  return res;
}

// ----
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
                           // [ 1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30,40,50,60]));
                          //  [ 1, 1, 1, 0]
console.log(dailyTemperatures([30,60,90]));
                          //  [ 1, 1, 0]

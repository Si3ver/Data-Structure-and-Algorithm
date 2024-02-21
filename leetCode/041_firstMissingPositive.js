/**
 * https://leetcode.cn/problems/first-missing-positive
 * 缺失的第一个正数
 * hard --- 其实比较简单
 *
 * 思路：两轮遍历，第一轮把区间内的数，放到正确的位置； 第二轮，从头找一下，找到第一个不正确的位置即为答案
 */

// Step1: 遍历一次数组把大于等于1的和小于数组大小的值放到原数组对应位置
// Step2: 再遍历一次数组查当前下标是否和值对应，如果不对应那这个下标就是答案，否则遍历完都没出现那么答案就是数组长度加1。
// 时间 O(n)， 空间O(1)
var firstMissingPositive = function(arr) {
  const n = arr.length;
  for (let i = 0; i < n; ++i) {
    if (arr[i] >= 0 && arr[i] <= n && arr[i] !== arr[arr[i]]) {
      const tmp = arr[arr[i]];
      arr[arr[i]] = arr[i];
      arr[i] = tmp;
      --i; // 后退一步，继续交换
    }
  }
  for (let i = 1; i <= n; ++i) {
    if (arr[i] !== i) {
      return i;
    }
  }
  return n + 1;
};

// --- test ---
let res1 = [], res2 = []
res1.push(firstMissingPositive([]))                  // 1
res1.push(firstMissingPositive([-4]))                // 1
res1.push(firstMissingPositive([1, 2, 0]))           // 3
res1.push(firstMissingPositive([3, 4, -1, 1]))       // 2
res1.push(firstMissingPositive([7, 8, 9, 11, 12]))   // 1
console.log(res1, res2)

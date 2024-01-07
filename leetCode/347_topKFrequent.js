/**
 * https://leetcode.cn/problems/top-k-frequent-elements
 * 前 k 个高频元素
 *
 */

// 方案一：计数 ->  第 k 大问题（可以用快排优化为 O(nlongk)）
var topKFrequent = function(nums, k) {
  const map = nums.reduce((m, num) => {
    const count = m.has(num) ? m.get(num) + 1: 1;
    m.set(num, count);
    return m;
  }, new Map());

  const sortedArr = Array.from(map).sort((a, b) => b[1] - a[1]); // 最坏 O(nlogn)
  const res = [];
  for (let i = 0; i < k && i < sortedArr.length; ++i) {
      res.push(sortedArr[i][0]);
  }
  return res;
};

// 方案二：大顶堆 O(nlogk)

// ---- test case ----
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent([1], 1));

/**
 * https://leetcode.cn/problems/subarray-sum-equals-k
 * 和为k的子数组
 * medium
 */

// 前缀和 O(n)
var subarraySum = function (arr, k) {
  let sum = 0, count = 0;
  const map = new Map([[0, 1]]);
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}

// 题目：和为 k 的子数组个数
// 核心： 前缀和 + map
// 思路：
export function subarraySum(nums: number[], k: number): number {
  let sum = 0, count = 0;
  const map = new Map<number, number>([[0, 1]]);
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k)!;
    }
    map.set(sum, (map.get(sum) || 0) + 1);
    if (nums.length === 9) {
      console.log(i,  nums[i],  sum, sum - k, count, map);
    }
  }
  return count;
};

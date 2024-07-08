/**
 * 最长连续序列
 * 思路: 排序后，遍历数组，判断当前值与前一个值是否连续，连续则cnt++，否则cnt=1
 * 解法一： (nlogn)
 */
// function longestConsecutive(nums: number[]): number {
//   if (nums.length < 2) return nums.length;
//   nums.sort((a, b) => a - b);
//   let cnt = 1, maxCnt = 1;
//   for (let i = 1; i < nums.length; ++i) {
//     if (nums[i] === nums[i - 1]) {
//       continue;
//     } else if (nums[i] === nums[i - 1] + 1) {
//       ++cnt;
//       maxCnt = Math.max(maxCnt, cnt);
//     } else {
//       cnt = 1;
//     }
//   }
//   return maxCnt;
// };

// 解法二：set 空间换时间，时间复杂度为 O(n)
// 思路：使用 set
export function longestConsecutive(nums: number[]): number {
  const n = nums.length;
  if (n < 2) return n;

  const set = new Set(nums);
  let maxCnt = 1;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let cnt = 1;
      while(set.has(num + cnt)) ++cnt;
      maxCnt = Math.max(maxCnt, cnt);
    }
  }
  return maxCnt;
};

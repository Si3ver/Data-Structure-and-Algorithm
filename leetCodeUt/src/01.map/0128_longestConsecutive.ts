/**
 * 最长连续序列
 */
function longestConsecutive(nums: number[]): number {
  if (nums.length < 2) return nums.length;
  nums.sort((a, b) => a - b);
  let cnt = 1, maxCnt = 1;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === nums[i - 1]) {
      continue;
    } else if (nums[i] === nums[i - 1] + 1) {
      ++cnt;
      maxCnt = Math.max(maxCnt, cnt);
    } else {
      cnt = 1;
    }
  }
  return maxCnt;
};

export {longestConsecutive};

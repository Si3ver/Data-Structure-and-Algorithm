/**
 * https://leetcode.cn/problems/summary-ranges/
 *
 * 汇总区间
 */
var summaryRanges = function(nums) {
  if (nums.length < 1) return [];
  const res = [];
  let start = nums[0], end = start;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === nums[i - 1] + 1) {
      end = nums[i];
    } else {
      res.push(`${start}${end > start ? '->' + end : ''}`);
      start = nums[i];
      end = start;
    }
  }
  res.push(`${start}${end > start ? '->' + end : ''}`);

  return res;
};

// ---- test case ----
console.log(summaryRanges([0,1,2,4,5,7]));
console.log(summaryRanges([0,2,3,4,6,8,9]));
console.log(summaryRanges([-1]));
console.log(summaryRanges([0]));

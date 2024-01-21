/**
 * https://leetcode.cn/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const n = nums.length;
  if (n < 3) return;
  nums.sort((x, y) => x - y);
  const res = [];
  for (let k = 0; k < n - 2 && nums[k] <= 0; ++k) {
    if (k > 0 && nums[k] === nums[k - 1]) continue;
    let lo = k + 1, hi = n - 1;
    while (lo < hi) {
      const sum = nums[k] + nums[lo] + nums[hi];
      if (sum === 0) {
        res.push([nums[k], nums[lo], nums[hi]]);
        while (lo < hi && nums[lo] === nums[++lo]) {};
        while (lo < hi && nums[hi] === nums[--hi]) {};
      } else if (sum < 0) {
        while (lo < hi && nums[lo] === nums[++lo]) {};
      } else {
        while (lo < hi && nums[hi] === nums[--hi]) {};
      }
    }
  }
  return res;
};


// test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-5, 1, 2, 3, 4, 5]))
console.log(threeSum([0, 0, 0, 0, 0]))
console.log(threeSum([-2, 0, 1, 1, 2]))

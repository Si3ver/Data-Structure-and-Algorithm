/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [], len = nums.length
  nums.sort((a, b) => a - b)
  if (nums[0] > 0 || nums[len - 1] < 0) return res
  for (let i = 0; i < len - 2 && nums[i] <= 0; ++i) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue    // 连续两个相等元素，即重复情况，直接跳过
    let l = i + 1, r = len - 1, target = -1 * nums[i]
    while(l < r) {
      if (nums[l] + nums[r] === target) {
        res.push([nums[i], nums[l++], nums[r--]])
        while(l < r && nums[l] === nums[l - 1]) ++l       // l - 1 的元素已经放进结果里了, 这里去重
        while(l < r && nums[r] === nums[r + 1]) --r
      } else if (nums[l] + nums[r] < target) {
        ++l
      } else {
        --r
      }
    }
  }
  return res
};


// test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-5, 1, 2, 3, 4, 5]))
console.log(threeSum([0, 0, 0, 0, 0]))
console.log(threeSum([-2, 0, 1, 1, 2]))

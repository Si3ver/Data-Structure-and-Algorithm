/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = []
  let len = nums.length
  nums.sort((a, b) => a - b)
  if (nums[0] > 0 || nums[len - 1] < 0) return res
  for (let i = 0; i < len - 2; ++i) {
    if (nums[i] < 0) {
      let firstIdx = i + 1
      let lastIdx = len - 1
      do {

      }
    }
  }

};


// test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4]))

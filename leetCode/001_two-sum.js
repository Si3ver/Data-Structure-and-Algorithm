// 数组 哈希表
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// method1 bad O(N^2)
var twoSum_bad = function(nums, target) {
  for (let i = 0; i < nums.length - 1; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        return [i , j]
      }
    }
  }
  return []
};

// O(N)
var twoSum = function (nums, target) {
  var hashmap = new Map()
  for (var i = 0; i < nums.length; ++i) {
    var cur = nums[i], gap = target - cur
    if (hashmap.get(cur) !== void (0)) {
      return [hashmap.get(cur), i]
    }
    hashmap.set(gap, i)
  }
  return []
};

// test case
console.log(twoSum([2, 7, 11, 5], 9))

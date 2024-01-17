/**
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii
 * 删除有序数组中的重复项II
 * medium
 */

var removeDuplicates = function(nums) {
  const n = nums.length;
  if (n < 3) return n;
  let count = 0, times = 1;
  for (let i = 1; i < n; ++i) {
    if (nums[i] === nums[i - 1]) {
      ++times;
      if (times > 2) {
        ++count;
      }
    } else {
      times = 1;
    }
    nums[i - count] = nums[i]; // !！ 要放到外边，相等也要赋值
  }
  return n - count;
}

// ---- test case ----
// const arr = [1, 1, 1, 2, 2, 3];
// console.log(removeDuplicates(arr));
// console.log(arr);

const arr2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(arr2));
console.log(arr2);

/**
 * idx  0  1  2  3  4  5  6  7  8
 * arr  0  0  1  1  1  1  2  3  3
 *      0  0  1  1  2
 *      0  0  1  1  2  3
 *      0  0  1  1  2  3  3
 */


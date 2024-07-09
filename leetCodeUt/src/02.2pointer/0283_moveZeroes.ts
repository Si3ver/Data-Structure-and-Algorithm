/**
 * 移动零
 * 方法：双指针
 *
 * 思路：左指针指向非零元素
 */

export function moveZeroes(nums: number[]): void {
  let left = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) {
      nums[left++] = nums[i];
    }
  }
  while (left < nums.length) {
    nums[left++] = 0;
  }
};

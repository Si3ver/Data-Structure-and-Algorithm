/**
 * 移动零
 * 方法：双指针
 *
 * 思路：左指针指向非零元素
 */

function moveZeroes(arr: number[]): void {
  let left = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== 0) {
      arr[left++] = arr[i]
    }
  }
  while (left < arr.length) {
    arr[left++] = 0;
  }
};


export {moveZeroes};

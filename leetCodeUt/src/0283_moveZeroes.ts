/**
 * 移动零
 * 方法：双指针
 */

function moveZeroes(arr: number[]): void {
  let j = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== 0) {
      arr[j++] = arr[i]
    }
  }
  while (j < arr.length) {
    arr[j++] = 0;
  }
}

export {moveZeroes};

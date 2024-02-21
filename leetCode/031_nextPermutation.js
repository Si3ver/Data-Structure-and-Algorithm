/**
 * https://leetcode.cn/problems/next-permutation
 * 下一个排列
 * medium
 *
 * 要求：原地修改
 * 思路：先从右往左遍历，找到第一个相邻正序对。再进行两轮交换
 */

var nextPermutation = function(arr) {
  const n = arr.length;

  // 1. find rightest first arr[pos] < arr[pos + 1]
  let pos = -1;
  for (let i = n - 2; i >= 0; --i) {
    if (arr[i] < arr[i + 1]) {
      pos = i;
      break;
    }
  }
  if (pos === -1) {
    arr.reverse();
    return arr;
  }

  // 2. find rightest arr[x] > arr[pos]  12354 -> 12453
  for (let i = n - 1; i > pos; --i) {
    if (arr[i] > arr[pos]) {
      const tmp = arr[pos];
      arr[pos] = arr[i];
      arr[i] = tmp;
      break;
    }
  }

  // reverse pos + 1 -> end
  let l = pos + 1, r = n - 1;
  while (l < r) {
    const tmp = arr[l];
    arr[l] = arr[r];
    arr[r] = tmp;
    ++l;
    --r;
  }
  return arr;
};

// ----
console.log(nextPermutation([1, 2, 3])); // [1, 3, 2]
console.log(nextPermutation([3, 2, 1])); // [1, 2, 3]
console.log(nextPermutation([1, 1, 5])); // [1, 5, 1]
console.log(nextPermutation([1, 2, 3, 5, 4])); // [1, 2, 4, 3, 5]

/**
 * https://leetcode.cn/problems/jump-game-ii
 * 跳跃游戏 II
 * medium
 *
 * 思路：双指针，计算覆盖范围
 */

var jump = function (arr) {
  const n = arr.length;
  if (n < 2) return 0;

  let times = 1, start = 0, end = arr[0];
  while (end < n - 1) {
    ++times;
    let next = -Infinity;
    for (let i = start; i <= end; ++i) {
      next = Math.max(next, arr[i] + i);
    }
    if (next < end) {
      return -1;
    }
    start = end;
    end = next;
  }
  return times;
}

// ----
console.log(jump([2, 3, 1, 1, 4])); // 2


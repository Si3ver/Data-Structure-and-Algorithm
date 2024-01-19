/**
 * https://leetcode.cn/problems/jump-game-ii
 * 跳跃游戏II
 * medium
 */

var jump = function (nums) {
  const n = nums.length;
  if (n < 2) return 0;

  let times = 1;
  for (let l = 0, r = nums[0]; r < n - 1;) { // r -> remotest distance
    ++times;
    let next = -Infinity;
    for (let i = l; i <= r; ++i) {
      next = Math.max(next, nums[i] + i);
    }
    if (next <= r) return -1;
    l = r;
    r = next;
  }
  return times;
}

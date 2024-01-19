/**
 * https://leetcode.cn/problems/jump-game
 * 跳跃游戏
 * medium
 */

var canJump = function(nums) {
  const n = nums.length;
  let endReachable = n - 1;
  for (let i = n - 2; i >= 0; --i) {
    if (i + nums[i] >= endReachable) {
      endReachable = i;
    }
  }
  return endReachable === 0;
};


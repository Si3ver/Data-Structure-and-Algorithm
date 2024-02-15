/**
 * https://leetcode.cn/problems/jump-game/
 * 跳跃游戏
 * medium
 *
 * 思路：贪心法，从后往前判断 i + arr[i] >= reachable 则证明 i ok
 */

var canJump = function (arr) {
  const n = arr.length;
  let reachable = n - 1;
  for (let i = n - 2; i >= 0; --i) {
    if (i + arr[i] >= reachable) {
      reachable = i;
    }
  }
  return reachable === 0;
}

/**
 * https://leetcode.cn/problems/partition-equal-subset-sum
 * 分割等和子集
 *
 * dp  0  1  2  3  4
 *  1  o  o  x  x  x
 *  2  o  o  o  o  x
 *  5  o  o  o  o  x
 */
var canPartition = function(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return false;
  const sum = arr.reduce((res, num) => res + num);
  if (sum & 1 !== 0) return false;
  const target = sum >> 1;
  const dp = [true, ...Array(target).fill(false)];
  for (const num of arr) {
      for (let i = target; i > 0; --i) { // 这里注意，从后往前遍历，避免被污染
          if (i - num >= 0 && dp[i - num]) {
              dp[i] = true;
          }
      }
  }
  return dp[target];
};
// ---- test case ----
console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));
console.log(canPartition([1, 2, 5]));

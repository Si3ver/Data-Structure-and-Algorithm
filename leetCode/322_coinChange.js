/**
 * https://leetcode.cn/problems/coin-change
 * 零钱兑换
 * 考点：动态规划、DP
 *
 * f(amount) = min(f(amount - coin) + 1) for coin of coins
 *
 * coins: 1, 2, 5
 * amount 0 1 2 3 4 5 6 7 8 9 10 11
 *        0 1 1 2 2 1 2 2 3 3 2  3
 */

var coinChange = function (coins, amount) {
  if (!Array.isArray(coins) || coins.length < 1 || amount < 0) return -1;
  if (amount === 0) return 0;
  const UPBOUND = amount + 1;
  const dp = [0, ...Array(amount).fill(UPBOUND)];
  for (let i = 1; i <= amount; ++i) {
    for (const coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  // console.log(dp);
  return dp[amount] === UPBOUND ? -1 : dp[amount];
}

// ---- test case ----
console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([1, 2, 5], 11));

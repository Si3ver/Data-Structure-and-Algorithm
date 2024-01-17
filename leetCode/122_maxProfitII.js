/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock
 * 买卖股票的最佳时机
 * easy
 */

var maxProfit = function (prices) {
  const n = prices.length;
  if (n < 2) return 0;
  let max = 0;
  for (let i = 1; i < n; ++i) {
    if (prices[i] - prices[i - 1] > 0) {
      max += prices[i] - prices[i - 1];
    }
  }
  return max;
}

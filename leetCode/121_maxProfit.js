/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock
 * 买卖股票的最佳时机
 * easy
 *
 * 备注：比122直接贪心略微复杂一点，需要计算 ans 累计利润，如果为负就丢弃。正数就比一比
 */

var maxProfit = function (prices) {
  const n = prices.length;
  if (n < 2) return 0;
  let max = 0, ans = 0;
  for (let i = 1; i < n; ++i) {
    ans += prices[i] - prices[i - 1];
    if (ans <= 0) {
      ans = 0;
    } else {
      max = Math.max(max, ans);
    }
  }
  return max;
}

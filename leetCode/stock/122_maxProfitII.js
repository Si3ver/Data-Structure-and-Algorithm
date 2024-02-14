/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
 * 买卖股票的最佳时机II （可操作多次）
 * medium
 */

var maxProfit = function (arr) {
  let ans = 0;
  for (let i = 1; i < arr.length; ++i) {
    const profit = arr[i] - arr[i - 1];
    if (profit > 0) {
      ans += profit;
    }
  }
  return ans;
}

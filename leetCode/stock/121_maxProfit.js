/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock
 * 买卖股票的最佳时机(只能买卖一次)
 * easy
 */

var maxProfit = function (arr) {
  const n = arr.length;
  if (arr < 2) return 0;
  let buyPrice = arr[0], max = 0;
  for (let i = 1; i < n; ++i) {
    if (arr[i] < buyPrice) {
      buyPrice = arr[i];
    } else {
      max = Math.max(max, arr[i] - buyPrice);
    }
  }
  return max;
}

var maxProfit = function (arr) {
  let ans = 0, max = 0;
  for (let i = 1; i < arr.length; ++i) {
    const profit = arr[i] - arr[i - 1];
    ans += profit;
    // console.log(ans)
    if (ans <= 0) {
      ans = 0;
    } else {
      max = Math.max(max, ans);
    }
  }
  return max;
}

// ----
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// console.log(maxProfit([7,6,4,3,1])); // 0

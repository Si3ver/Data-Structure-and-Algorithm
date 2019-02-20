// 01背包问题
// 定义A(i, Y)为，总重量不超过Y的前提下，前i种物品总价格能达到的最高价值。
// 递推公式 A(i, Y) = max(A(i-1, Y), pi + A(i-1, Y-wi))
let knapsack = (weights, prices, capacity) => {
    let n = weights.length
    let dp = new Array(n).fill(0).map(_item => new Array(capacity+1).fill(0))
    
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j <= capacity; ++j) {
            if (i === 0) {
                dp[i][j] = j < weights[0] ? 0 : prices[0];  // 第 1 件物品(边界)
            } else {
                if (j < weights[i]) {       // 当前物品太重
                    dp[i][j] = dp[i-1][j];
                } else {
                    dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j - weights[i]] + prices[i]); // 第 2 ~ n 件物品
                }
            }
        }
    }
    return dp[n-1][capacity];
}

// --- test ---
console.log(knapsack([3, 3, 2], [3, 2, 2], 5))           // 5
console.log(knapsack([2,2,6,5,4], [6,3,5,4,6], 10))      // 15

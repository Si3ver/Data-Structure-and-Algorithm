/**
 * https://leetcode.cn/problems/longest-increasing-subsequence
 * 最长递增子序列
 * medium
 */

/*
  思路一： 暴力线性 DP
  定义 f(i) 表示  i 必选时，最长递增子序列的长度
  f(i) = max(f(j) + 1)    j

  O(n^2) O(n)
*/
var lengthOfLIS = function(arr) {
  const n = arr.length;
  if (n < 2) return n;
  const dp = Array(n).fill(1);
  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  // console.log(dp)
  return Math.max(...dp);
};


/*
解法二： 二分优化后的DP： O(n*logn)
      i |   0   1   2   3   4   5   6   7
    arr |  10   9   2   5   3   7 101  18
     dp | 102 102 102 102 102 102 102 102
     dp |  10
     dp |   9
     dp |   2
     dp |       5
     dp |       3
     dp |           7
     dp |             101
     dp |              18

      i |   0   1   2   3   4   5
    arr |   0   1   0   3   2   3
     dp |   ∞   ∞   ∞   ∞   ∞   ∞
     dp |   0
     dp |       1
     dp |   0
     dp |           3
     dp |           2
     dp |               3
*/
var lengthOfLIS = function(arr) {
  const n = arr.length;
  if (n < 2) return n;

  const search = (dp, target, hi) => {
    let lo = 0;
    while (lo <= hi) {
      let mid = lo + ((hi - lo) >> 1);
      if (target === dp[mid]) {
        return mid;
      } else if (target < dp[mid]) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    return lo;
  }

  const UPBOUND = Math.max(...arr) + 1;
  const dp = Array(n).fill(UPBOUND);
  for (let i = 0; i < n; ++i) {
    let pos = search(dp, arr[i], i);
    dp[pos] = arr[i];
    // console.log(pos, dp);
  }
  for (let i = dp.length - 1; i >= 0; --i) {
    if (dp[i] !== UPBOUND) return i + 1;
  }
  return 0; // 👈 这句应该永远执行不到
};

// ---- test case ----
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])) // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])) // 4
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])) // 1

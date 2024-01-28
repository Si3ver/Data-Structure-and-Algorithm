/**
 * https://leetcode.cn/problems/h-index
 * h指数
 * medium
 */

var hIndex = function (A) {
  const n = A.length;
  const cntArr = Array(n + 1).fill(0);
  for (const num of A) {
    ++cntArr[Math.min(num, n)];
  }
  // console.log(cntArr);
}

// ----
console.log(hIndex([3, 0, 6, 1, 5]));

/**
 * https://leetcode.cn/problems/h-index
 * h指数
 * medium
 *
 * 引用次数   i     0  1  2  3  4 >=5
 * 文章数量 cntArr  1  1  0  1  0  2
 */

// 计数法，O(n)
var hIndex = function (A) {
  const n = A.length;
  const cntArr = Array(n + 1).fill(0);
  for (const num of A) {
    ++cntArr[Math.min(num, n)]; // 引用次数统计
  }
  let sum = 0;
  for (let i = n; i >= 0; --i) {
    sum += cntArr[i];
    if (sum >= i) {
      return i;
    }
  }
}

// ----
console.log(hIndex([3, 0, 6, 1, 5])); // 3
console.log(hIndex([1, 3, 1])); // 1

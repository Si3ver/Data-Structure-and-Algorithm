/**
 * https://leetcode.cn/problems/container-with-most-water
 * 盛水最多的容器
 * medium
 */

var maxArea = function(A) {
  const n = A.length;
  if (n < 2) return 0;

  let max = 0;
  let i = 0, j = n - 1;
  while (i < j) {
    const minHeight = A[i] < A[j] ? A[i++] : A[j--];
    const area = minHeight * (j - i + 1);
    max = Math.max(max, area);
  }
  return max;
}

// ----
console.log(maxArea([1,8,6,2,5,4,8,3,7]));

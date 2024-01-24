/**
 * https://leetcode.cn/problems/merge-intervals/
 * 合并区间
 * medium
 */

// O(nlogn)
var merge = function(A) {
  const n = A.length;
  if (n < 2) return A;

  A.sort(([s1, d1], [s2, d2]) => s1 === s2 ? d1 - d2 : s1 - s2);

  let prev = A[0]
  const res = [prev];
  for (let i = 1; i < n; ++i) {
    const curr = A[i];
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      res.push(curr)
      prev = curr;
    }
  }
  return res;
};

// ----
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));

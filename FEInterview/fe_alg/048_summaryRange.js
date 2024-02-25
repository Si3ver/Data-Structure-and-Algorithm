/**
 * https://leetcode.cn/problems/summary-ranges/
 * 228.汇总区间
 * easy
 */
var summaryRanges = function(arr) {
  if (!arr.length) return [];
  const res = [];
  let start = arr[0], end = start;
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] === end + 1) {
      end = arr[i];
    } else {
      res.push(start === end ? `${start}` : `${start}->${end}`);
      start = arr[i];
      end = start;
    }
  }
  res.push(start === end ? `${start}` : `${start}->${end}`);
  return res;
};

// ---- test case ----
console.log(summaryRanges([0,1,2,4,5,7])); // ["0->2","4->5","7"]
console.log(summaryRanges([0,2,3,4,6,8,9])); // ["0","2->4","6","8->9"]
console.log(summaryRanges([-1]));
console.log(summaryRanges([0]));

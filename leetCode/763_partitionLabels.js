/**
 * https://leetcode.cn/problems/partition-labels/
 * 划分字母区间
 * medium
 */

var partitionLabels = function (S) {
  const lastPosMap = new Map();
  for (let i = 0; i < S.length; ++i) {
    lastPosMap.set(S[i], i);
  }
  const res = [];
  let start = 0, max = 0;
  for (let i = 0; i < S.length; ++i) {
    const currentLastPos = lastPosMap.get(S[i]);
    max = Math.max(max, currentLastPos);
    if (i === max) {
      res.push(i - start + 1);
      start = i + 1;
    }
  }
  return res;
}

// ----
console.log(partitionLabels('ababcbacadefegdehijhklij')); // [9, 7, 8]
console.log(partitionLabels('eccbbbbdec')); // [10]

/**
 * https://leetcode.cn/problems/partition-labels/
 * 划分字母区间
 * medium
 *
 * 思路：map 存储字符最后出现的下标。第二轮遍历，计算 maxLastPos 即为分割点。
 */

var partitionLabels = function(s) {
  const lastPosMap = new Map();
  for (let i = 0; i < s.length; ++i) {
    lastPosMap.set(s[i], i);
  }
  const res = [];
  let maxLastPos = 0, start = 0;
  for (let i = 0; i < s.length; ++i) {
    const lastPos = lastPosMap.get(s[i]);
    maxLastPos = Math.max(maxLastPos, lastPos);
    if (i === maxLastPos) {
      res.push(i - start + 1);
      start = i + 1;
    }
  }
  return res;
};

// ----
console.log(partitionLabels('ababcbacadefegdehijhklij')); // [9, 7, 8]
/*
  a: 8
  b: 5
  c: 7
  d: 14
  e: 15
  f: 11
  g: 13
  h: 19
  i: 22
  j: 23
  k: 20
  l: 21

  index 0  1  2  3  4  5  6  7  8 |  9 10 11 12 13 14 15 | 16 17 18 19 20 21 22 23
  last  8  5  8  5  7  5  8  7  8 | 14 15 11 15 13 14 15 | 19 22 23 19 20 21 22 23
  ch    a  b  a  b  c  b  a  c  a |  d  e  f  e  g  d  e |  h  i  j  h  k  l  i  j
                                9                      7                         8
 */
console.log(partitionLabels('eccbbbbdec')); // [10]

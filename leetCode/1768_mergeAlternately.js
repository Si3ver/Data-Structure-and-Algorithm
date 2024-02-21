/**
 * https://leetcode.cn/problems/merge-strings-alternately
 * 交替合并字符串
 * easy
 */

var mergeAlternately = function(s1, s2) {
  const m = s1.length, n = s2.length;
  let i = 0, j = 0, res = '';
  while(i < m || j < n)  {
    const ch1 = i < m ? s1[i++] : '';
    const ch2 = j < n ? s2[j++] : '';
    res += ch1 + ch2;
  }
  console.log(i, j)
  return res;
};

// ----
console.log(mergeAlternately('abc', 'pqrst'))

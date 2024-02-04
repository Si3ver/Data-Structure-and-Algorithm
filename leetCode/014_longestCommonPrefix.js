/**
 * https://leetcode.cn/problems/longest-common-prefix/
 * 最长公共前缀
 * easy
 */

var longestCommonPrefix = function (strs) {
  const n = strs.length;
  if (n === 0) return '';
  if (n === 1) return strs[0];

  let res = strs[0];
  for (let i = 0; i < n; ++i) {
    while (strs[i].slice(0, res.length) !== res) {
      res = res.slice(0, res.length - 1);
    }
  }
  return res;
};

// ----
console.log(longestCommonPrefix(["flower", "flow", "flight"]));

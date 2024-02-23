/*
 * https://leetcode.cn/problems/assign-cookies/
 * 455. 分发饼干
 * easy

  题目描述
  老师分饼干，每个孩子只能得到一块饼干，但每个孩子想要的饼干大小不尽相同。目标是尽量让更多的孩子满意。
  如孩子的要求是 [1, 3, 5, 4, 2]，饼干是[1, 1]，最多能让1个孩子满足。
  如孩子的要求是 [10, 9, 8, 7, 6]，饼干是[7, 6, 5]，最多能让2个孩子满足。
*/

// 思路：贪心法 1. 先排序 2. 双指针
var findContentChildren = function(g, s) {
  const sortFunc = (x, y) => x - y;
  g.sort(sortFunc);
  s.sort(sortFunc);
  let i = 0;
  for (let j = 0; i < g.length && j < s.length; ++j) {
    if (g[i] <= s[j]) {
      ++i;
    }
  }
  return i;
};
// 测试代码
console.log(assignCookie([1,3,5,4,2],[1,1])); // 1
console.log(assignCookie([10,9,8,7,6],[7,6,5])); // 2

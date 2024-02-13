/**
 * https://leetcode.cn/problems/generate-parentheses/
 * 括号生成
 * medium
 */

var generateParenthesis = function (n) {
  const dfs = (cntL, cntR, path) => {
    if (cntL === n && cntR === n) {
      res.push(path.join(''));
      return;
    }
    if (cntL < n) {
      dfs(cntL + 1, cntR, [...path, '('])
    }
    if (cntR < cntL) {
      dfs(cntL, cntR + 1, [...path, ')'])
    }
  }
  const res = [];
  dfs(0, 0, '');
  return res;
}

//----
console.log(generateParenthesis(3));

/**
 * 输入一个字符串，打印出该字符串中字符的所有排列的情况。
 * 例如输入字符串 abc，则打印出由字符 a、b、c 所能排列出来的所有字符串 abc、acb、bac、bca、cab 和 cba.
 * 即全排列，使用 dfs 递归可解，参考 https://leetcode.cn/problems/permutations/
 */
function permute(str) {
  const dfs = (path, remain) => {
    // terminator
    if (!remain.length) {
      res.push(path.join(''));
      return;
    }
    for (let i = 0; i < remain.length; ++i) {
      // process
      const [ch] = remain.splice(i, 1);
      path.push(ch);
      // drill down
      dfs(path, remain);
      // revert status
      path.pop();
      remain.splice(i, 0, ch);
    }
  }

  const res = [];
  dfs([], str.split(''));
  return res;
}

// ----
console.log(permute("abc")); // ['a','b']  ['b','a']

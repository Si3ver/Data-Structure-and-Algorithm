/**
 * https://leetcode.cn/problems/palindrome-partitioning
 * 分割回文串
 *
 *
 */

function isPal(s, l, r) {
  while (l < r) {
    if (s[l++] !== s[r--]) {
      return false;
    }
  }
  return true;
}

// 方案一：dfs + 回溯
var partition = function(s) {
  const dfs = (path, start) => {
    // terminator
    if (start === s.length) {
      res.push(path.slice());
      return;
    }
    // process
    for (let i = start; i < s.length; ++i) {
      if (isPal(s, start, i)) {
        path.push(s.substring(start, i + 1));
        // drill down
        dfs(path, i + 1);
        // revert status
        path.pop();
      }

    }
  }
  const res = [];
  dfs([], 0);
  return res;
};

// ---- test cases ----
console.log(partition('aab'));
console.log(partition('a'));
console.log(partition(''));

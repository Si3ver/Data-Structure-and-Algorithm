/**
 * https://leetcode.cn/problems/palindrome-partitioning
 * 分割回文串
 * medium
 *
 * 思路：
 */

function isPal(s, l = 0, r = s.length - 1) {
  while (l < r) {
    if (s[l++] !== s[r--]) {
      return false;
    }
  }
  return true;
}

console.log(isPal('12321'));
console.log(isPal('123321'));
console.log(isPal('123421'));

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

// 利用解构， 写法更简洁一点
var partition1 = function(s) {
  /**
   * 递归辅助函数
   * @param {number} start 起点索引
   * @param {string[]} path 起点前的回文串
   * @returns effects
   */
  const dfs = (start, path) => {
    if (start === s.length) {
      res.push(path);
      return;
    }
    for (let i = start; i < s.length; ++i) {
      if (isPal(s, start, i)) { //  start ～ i 是回文串，存入 path
        dfs(i + 1, [...path, s.substring(start, i + 1)]);
      }
    }
  }
  const res = [];
  dfs(0, []);
  return res;
};

// ---- test cases ----
console.log(partition('aab'));
console.log(partition('a'));
console.log(partition(''));

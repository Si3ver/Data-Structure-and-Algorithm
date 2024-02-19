/**
 * https://leetcode.cn/problems/valid-parentheses
 * 有效括号
 * easy
 *
 * 思路：遍历一轮，用栈匹配
 */

var isValid = function(s) {
  const m = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ]);
  const stack = [];
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    if (m.has(ch)) {
      stack.push(m.get(ch));
    } else if (stack.length && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

// ----
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));

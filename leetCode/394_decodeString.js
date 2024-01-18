/**
 * https://leetcode.cn/problems/decode-string
 * 解码字符串
 * medium
 */

var decodeString = function(s) {
  const stack = [];
  let res = '', multi = 0;
  for (const ch of s) {
    const isNum = !Number.isNaN(Number(ch));
    if (isNum) {
      multi = multi * 10 + Number(ch);
    } else if (ch === '[') {
      stack.push([res, multi]);
      res = '';
      multi = 0;
    } else if (ch === ']') {
      const [lastRes, currMulti] = stack.pop();
      res = lastRes + res.repeat(currMulti);
    } else {
      res = `${res}${ch}`;
    }
  }
  return res;
};

// ---- test cases -----
console.log(decodeString('3[a]2[bc]'))      // aaabcbc
console.log(decodeString('3[a2[c]]'))       // accaccacc
console.log(decodeString('2[abc]3[cd]ef'))  // abcabccdcdcdef
console.log(decodeString('abc3[cd]xyz'))    // abccdcdcdxyz

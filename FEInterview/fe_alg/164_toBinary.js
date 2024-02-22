/**
 * 题目标题：n 个 2 的 n 次方之和
 * 题目描述：给一个数（例如 24 = 2^3 + 2^4），它是由 2 的 0、1、2、3...n 次方中的任意个相加得到，求它是由哪几个数相加得到
 *
 * 思路：转换成二进制，例如 10001 = 2^4 + 2^0
 */

function toBinary(n) {
  const res = [];
  while (n > 0) {
    res.push(n & 1);
    n = n >> 1;
  }
  return res
    .map(
      (bit, index) => bit ? Math.pow(2, index) : 0
    )
    .filter(x => x !== 0);
}

// ---- test
console.log(toBinary(24));
console.log(toBinary(25));
console.log(toBinary(26));

/**
 * https://leetcode.cn/problems/add-binary
 *
 * 二进制求和
 */
var addBinary = function(a, b) {
  const m = a.length, n = b.length, maxLen = Math.max(m, n);
  let carry = 0;
  let res = [];
  for (let i = 1; i <= maxLen; ++i) {
      const x = m - i >= 0 ? Number(a[m - i]) : 0;
      const y = n - i >= 0 ? Number(b[n - i]) : 0;
      let sum = x + y + carry;
      carry = Math.floor(sum / 2);
      sum = sum % 2;
      res.push(String(sum));
  }
  if (carry) {
      res.push(String(carry));
  }
  return res.reverse().join('')
};

// ---- test case ----
console.log(addBinary("1010", "1011"));
console.log(addBinary("11", "1"));

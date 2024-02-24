// 实现一个函数，完成两个二进制数相加

// 方案一：调用 parseInt
function add1(str1, str2) {
	return parseInt(str1, 2) + parseInt(str2, 2)
}

// 方案二：自己实现 parseInt
function add2(str1, str2) {
  const toNumber = str => str.split('').reduce((
    (sum, ch) => sum * 2 + (ch === '1' ? 1 : 0)
  ), 0);
  return toNumber(str1) + toNumber(str2);
}

/**
 * https://leetcode.cn/problems/add-binary/
 * 067.二进制求和
 * easy
 *
 * 注：返回二进制字符串
*/
// 方案三，二进制逐位相加
var addBinary = function(str1, str2) {
  const m = str1.length, n = str2.length, maxLen = Math.max(m, n);
  let carry = 0, res = '';
  for (let i = 1; i <= maxLen; ++i) {
    const x = m - i >= 0 ? Number(str1[m - i]) : 0;
    const y = n - i >= 0 ? Number(str2[n - i]) : 0;
    const sum = x + y + carry;
    carry = sum >> 1;
    res = `${sum & 1}${res}`;
  }
  if (carry) {
    res = `${carry}${res}`;
  }
  return res;
};

// ---- test case ----
console.log(add1('101', '100')); // 5 + 4 = 9
console.log(add2('101', '100')); // 5 + 4 = 9
console.log(addBinary('101', '100')); // 1001

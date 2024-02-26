/**
 *  与 038_addBinary.js 类似
 */
// 大数相加, string
function addBig(num1, num2) {
  const m = num1.length, n = num2.length;
  if (!m || !n) return m === 0 ? num2 : num1;
  let i = m - 1, j = n - 1, res = '', carry = 0;
  while (i >= 0 || j >= 0) {
    const x = i >= 0 ? Number(num1[i--]) : 0;
    const y = j >= 0 ? Number(num2[j--]) : 0;
    const sum = x + y + carry;
    res = `${sum % 10}${res}`;
    carry = Math.floor(sum / 10);
  }
  if (carry > 0) {
    res = `${carry}${res}`;
  }
  return res;
}

// ---- test
console.log(addBig('123', '456')); // 579
console.log(addBig('1234567890', '0')); // 1234567890
console.log(addBig('1234567890', '9876543210')); // 1111111100
/**
 *   1 2 3 4 5 6 7 8 9 0
 *   9 8 7 6 5 4 3 2 1 0
 * ---------------------
 * 1 1 1 1 1 1 1 1 1 0 0
 */

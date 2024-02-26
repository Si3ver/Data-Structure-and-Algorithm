/*
  与 038_addBinary.js、083_addBig.js 类似

  题目描述
  实现一个函数，输入是两个二进制数的字符串，输出两个数相加后的十进值结果。
  eg. add('01', '10') = 3
*/

// 方案一：对parseInt比较熟的话
function add1(num1, num2) {
  return parseInt(num1, 2) + parseInt(num2, 2);
}

// 方案二：实现一个函数，将二进制数转化为十进制，再相加
function add2(num1, num2) {
  return (
    Number("0b" + num1).toString(10) * 1 + Number("0b" + num2).toString(10) * 1
  );
}

// 方案三：逐位相加
function add3(str1, str2) {
  let carry = 0, res = 0;
  for (let i = str1.length - 1, j = str2.length - 1; i >= 0 || j >= 0; --i, --j) {
    const x = i >= 0 ? Number(str1[i]) : 0;
    const y = j >= 0 ? Number(str2[j]) : 0;
    const sum = x + y + carry;
    res = res * 2 + (sum & 1);
    carry = sum >> 1;
  }
  return res;
}


// ----
console.log(add1('10', '01'));
console.log(add2('10', '01'));
console.log(add3('10', '01'));

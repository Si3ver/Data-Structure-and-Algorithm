/**
 * https://leetcode.cn/problems/integer-to-roman/
 * 整数转罗马数字
 * medium
 *
 * 3999 -> 3000 + 900 + 90 + 9 -> MMM CM XC IX
 *
 *
 */

var intToRoman = function(num) {
  const map = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]);
  const resArr = [];
  for (const [value, symbol] of map.entries()) {
    while (value >= num) {
      num -= value;
      resArr.push(symbol);
    }
    if (num === 0) break;
  }
  return resArr.join('');
};

// ----
console.log(intToRoman(3999));

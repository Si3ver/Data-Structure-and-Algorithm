/**
 * https://leetcode.cn/problems/single-number/
 * 只出现一次的数字
 * easy
 */

var singleNumber = function (arr) {
  return arr.reduce((res, num) => res ^ num);
}

/**
 * https://leetcode.cn/problems/single-number-ii/
 * 只出现一次的数字II
 * medium
 */

// 方法一：哈希表计数法O(n) O(n)
var singleNumber = function(arr) {
  const cntArr = arr.reduce((m, num) => m.set(num, (m.get(num) || 0) + 1), new Map());
  for (const [num, cnt] of cntArr.entries()) {
    if (cnt === 1) {
      return num;
    }
  }
};

// 方法二：位运算 O(n) O(1)
// 原理：累计到 3 就重置为 0
var singleNumber = function(arr) {
  let a = 0, b = 0;
  for (const num of arr) {
    b = ~a & (b ^ num);
    a = ~b & (a ^ num);
  }
  return b;
}



// ----
console.log(singleNumber([2,2,3,2]));
console.log(singleNumber([0,1,0,1,0,1,99]));

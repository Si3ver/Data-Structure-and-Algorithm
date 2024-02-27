// 题目描述
// 实现一个手动开根号的函数 sqrt(n)，n 为整数 0 < n < 100,000

/**
 * 实现一个开平方根的函数，结果精确到小数点后4位
 * @param {*} n
 * @param {*} count 迭代次数，越大越精准
 * @returns
 */
function sqrt(n, count) {
  let i = 1;
  while (i * i < n) {
    i++;
  }
  let a = i - 1;
  let b = n - a * a;
  if (i * i === n) {
    return i;
  }
  return run(a, b, count);
}

function run(a, b, n) {
  if (n - 1 == 0) {
    return a + b / a;
  }
  return a + b / (a + run(a, b, n - 1));
}

// ----
console.log(sqrt(800, 2))
console.log(sqrt(800, 5))
console.log(sqrt(800, 8))
console.log(sqrt(800, 9))
console.log(sqrt(800, 10))
console.log(sqrt(900, 100))

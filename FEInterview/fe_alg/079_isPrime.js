// 写一个判断质数的isPrime()函数，当其为质数时返回true，否则返回false。

// 负数不是质数。同样的，1和0都不是，因此，要对这些数字做检测。
// 2是唯一的既是偶数又是质数的数字。没有必要用一个循环来验证4,6,8。
// 如果一个数字不能被2整除，它同样也不能被4,6,8等整除，因此你的循环需要跳过这些数字。可以采取其他一些更明智的优化手段，例如，如果一个数字不能被5整除，它也不会被5的倍数整除。所以，没有必要检测10,15,20等等
// 不需要检查比输入数字的开方还要大的数字

function isPrime(num) {
  // 先判断输入的是否为整数
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return false;
  }
  // 负数不是质数。同样的，1和0都不是
  if (num < 2) {
    return false;
  }
  // 除了 2 之外的偶数都不是
  if (num === 2) {
    return true;
  } else if ((num & 1) === 0) {
    return false;
  }

  // 不需要检查比输入数字的开方还要大的数字
  // 2是唯一的既是偶数又是质数的数字。没有必要用一个循环来验证4,6,8。
  var squareRoot = Math.sqrt(num);
  for(var i = 3; i <= squareRoot; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// ---- test case ----
// console.log(isPrime(1)); // ❌
console.log(isPrime(2)) // ✅
console.log(isPrime(3)) // ✅
console.log(isPrime(4)) // ❌
console.log(isPrime(5)) // ✅
console.log(isPrime(6)) // ❌
console.log(isPrime(7)) // ✅
console.log(isPrime(8)) // ❌
console.log(isPrime(9)) // ❌
console.log(isPrime(10)) // ❌

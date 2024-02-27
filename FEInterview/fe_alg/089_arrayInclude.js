// 判断A、B数组的包含关系（值和数量），A 属于 B 返回 1，B 属于 A 返回 2，两者相等返回 0，其他返回 -1

function arrayInclude(arrA, arrB) {
  arrA.sort((x, y) => x - y);
  arrB.sort((x, y) => x - y);
  const m = arrA.length, n = arrB.length, minLen = Math.min(m, n);

  for (let i = 0; i < minLen; ++i) {
    if (arrA[i] !== arrB[i]) {
      return -1;
    }
  }
  if (m === n) {
    return 0;
  }
  return m < n ? 1 : 2;
}

// ---- test
var a1 = [4, 2, 3, 1, 4];
var a2 = [4, 2, 3, 1, 4, 5];
console.log(arrayInclude(a1, a2)); // 1

var a3 = [4, 2, 3, 1, 4];
var a4 = [4, 2, 3, 1];
console.log(arrayInclude(a3, a4)); // 2

var a5 = [4, 2, 3, 1, 4];
var a6 = [4, 2, 3, 1, 4];
console.log(arrayInclude(a5, a6)); // 0

var a7 = [4, 2, 3, 1, 4];
var a8 = [3, 2, 3, 1, 4];
console.log(arrayInclude(a7, a8)); // -1

// 请为所有数组对象添加一个 findDuplicate(n) 方法，用于返回该数组中出现频率 >=n 的元素列表

// 思路：计数法
Array.prototype.findDuplicate = function (n) {
  if (typeof n != "number" || isNaN(n)) {
    return [];
  }

  const cntMap = this.reduce(
    (m, num) =>
      m.set(num, (m.get(num) || 0) + 1),
    new Map()
  );

  const res = [];
  for (const [num, freq] of cntMap) {
    if (freq >= n) {
      res.push(num);
    }
  }
  return res;
};

// ---- test cases ----
console.log([1, 2, 4, 5, 3, 2].findDuplicate(2)); // [2]
console.log([1, 2, 4, 2, 4, 5, 3, 2].findDuplicate(2)); // [2, 4]
console.log([1, 2, 5, 4, 5, 5, 3, 2].findDuplicate(2)); // [2, 5]

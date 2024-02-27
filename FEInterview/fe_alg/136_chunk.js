/*
 * 将一个数组分割成多个数组，其中每个数组的单元数目由 length 决定。最后一个数组的单元数目可能会少于 length 个。
 * 示例:
    const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    chunk(a, 4);

   结果：[['a', 'b', 'c', 'd'],['e', 'f', 'g', 'h']]
 */

const chunk = (arr, size) => {
  if (size < 1) {
    throw new Error('size is less than 1');
  }

  const res = [];
  arr.forEach((item, index) => {
    if (index % size === 0) {
      res.push([]);
    }
    res[res.length - 1].push(item);
  });
  return res;
};

// ---- test case ----
console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 4));
console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 3));

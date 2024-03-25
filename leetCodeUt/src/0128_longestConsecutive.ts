/**
 * 最长连续序列
 */
function longestConsecutive(arr: number[]): number {
  if (!arr.length) return 0;
  arr.sort((x, y) => x - y);
  let count = 1, maxCount = 1;
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] === arr[i - 1]) {
      continue;
    } else if (arr[i] === arr[i - 1] + 1) {
      maxCount = Math.max(maxCount, ++count);
    } else {
      count = 1;
    }
  }
  return maxCount;
};

export {longestConsecutive};

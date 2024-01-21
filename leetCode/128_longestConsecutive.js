/**
 * https://leetcode.cn/problems/longest-consecutive-sequence
 * 最长连续序列
 * medium
 */

var longestConsecutive = function(arr) {
  const set = new Set(arr);
  let maxCount = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let count = 1;
      while (set.has(current + 1)) {
        ++current;
        ++count;
      }
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount;
}

// ----
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

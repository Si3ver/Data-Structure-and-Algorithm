/**
 * https://leetcode.cn/problems/longest-consecutive-sequence
 * 最长连续序列
 * medium
 */

// O(n)? O(n) 有些极端用例会比较慢
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

// 解法2 O(nlogn) O(1) <- 反而比较快
var longestConsecutive2 = function(arr) {
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
}

// ----
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

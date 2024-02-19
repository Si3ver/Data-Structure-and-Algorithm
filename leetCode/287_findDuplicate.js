/**
 * https://leetcode.cn/problems/find-the-duplicate-number/
 * 寻找重复数
 * medium
 *
 * 数组长度 n + 1，数字范围 1,n
 * 思路：快慢指针
 */

var findDuplicate = function(arr) {
  let slow = 0, fast = 0;

  do {
    slow = arr[slow];
    fast = arr[arr[fast]];
  } while (slow !== fast);

  fast = 0;
  do {
    slow = arr[slow];
    fast = arr[fast];
  } while (slow !== fast);
  return slow;
}

// ----
console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3

// 思路： 双端队列 dequeue O(N)
// a.入队 若进来一个最大元素，左边全出队。限制长度。
// b.维护 最大值永远是最左边元素。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (!nums || nums.length === 0) return []
  var res = [], window = []                   // 注: window 存下标
  nums.forEach((item, idx) => {
    if (idx - k >= 0 && idx - k >= window[0]) {
      window.shift()      // 窗口大小限制，下标（idx - k）的元素寿命到了
    }
    while (window && item >= nums[window[window.length - 1]]) {
      window.pop()      // pop掉“永无出头之日”的元素
    }
    window.push(idx)    // 当前下标入队
    // console.log(idx, ':', window)
    if (idx >= k - 1) {
      res.push(nums[window[0]])
    }
  })
  return res;
}



// // test cases
let nums1 = [1, 3, -1, -3, 5, 3, 6, 7]
console.log(maxSlidingWindow(nums1, 3))
let nums2 = [7, 2, 4]
console.log(maxSlidingWindow(nums2, 2))
let nums3 = [2, 7, 3, 4, 5]
console.log(maxSlidingWindow(nums3, 3))

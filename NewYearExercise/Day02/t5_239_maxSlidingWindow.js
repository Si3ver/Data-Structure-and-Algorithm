// 滑动窗口最大值
// 解法一（暴力法），时间复杂度为O(n*k)
var maxSlidingWindow1 = function(nums, k) {
    if (!nums || !nums.length)      return [];
    return Array.from({
        length: nums.length - k + 1                 // 结果数组的长度
    }).map( (v, times) => 
        Math.max(...nums.slice(times, times+k))     // 暴力slice + Math.max()
    )

};
// 解法二： O(n)
var maxSlidingWindow2 = function(nums, k) {
    if (!nums || nums.length === 0) return [];
    var res = [], window = [];
    nums.forEach((item, idx) => {
        if (idx >= k && window[0] <= idx - k) {
            window.shift();
        }
        while (window && nums[window[window.length-1]] <= item) {
            window.pop();
        }
        window.push(idx);
        if (idx >= k - 1) {
            res.push(nums[window[0]]);
        }
    })
    return res;
};

// --- test ---
let res = []
res.push(maxSlidingWindow1([1,3,-1,-3,5,3,6,7], 3))
res.push(maxSlidingWindow2([1,3,-1,-3,5,3,6,7], 3))
// res.push()
// res.push()
// res.push()
// res.push()
console.log(res)

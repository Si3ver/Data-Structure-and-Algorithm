// 解法1： O(nlogn)
var maximumGap1 = function(nums) {
    if (nums.length < 2) return 0
    nums.sort((a, b) => a - b)
    let maxGap = 0
    for (let i = nums.length - 1; i > 0; --i) {
        let curGap = nums[i] - nums[i-1]
        if (maxGap < curGap) {
            maxGap = curGap
        }
    }
    return maxGap
};
// 解法2： O(n)  ToDo
// ...

// --- test ---
console.log(maximumGap1([3,6,9,1]))
console.log(maximumGap1([10]))

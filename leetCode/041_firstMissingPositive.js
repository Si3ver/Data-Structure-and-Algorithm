// 缺失的第一个正数
// 解法1： 利用把正数存一个bitmap，再搜索bitmap  时间复杂度 O(n)，空间复杂度 O(n)
var firstMissingPositive1 = function(nums) {
    if (!nums.length) return 1
    let map = new Map(), len = nums.length
    for (let item of nums) {
        if (item > 0 && item <= len && !map.has(item)) {
            map.set(item, true)
        }
    }
    for (let i = 1; i <= len; ++i) {
        if (!map.has(i)) {
            return i
        }
    }
    return len + 1
};

// 解法2： 
// Step1: 遍历一次数组把大于等于1的和小于数组大小的值放到原数组对应位置
// Step2: 再遍历一次数组查当前下标是否和值对应，如果不对应那这个下标就是答案，否则遍历完都没出现那么答案就是数组长度加1。  
// 时间 O(n)， 空间O(1)
var firstMissingPositive2 = function(nums) {
    if (!nums.length) return 1;
    let len = nums.length               // 原数组长度
    nums.push(-1)                       // trick: 数组长度增1，为了存放 len (如果存在)
    for (let i = 0; i < len; ++i) {
        if (nums[i] >= 0 && nums[i] <= len && nums[i] !== nums[nums[i]]) {
            let tmp = nums[nums[i]]     // swap, 把nums[i]放置到正确的位置 nums[nums[i]] (备注：正确的位置即，下标等于值)
            nums[nums[i]] = nums[i]
            nums[i] = tmp
            --i                         // 后退一步，继续交换
        }
    }
    for (let i = 1; i <= len; ++i) {
        if (nums[i] !== i) {
            return i
        }
    }
    return len + 1
};

// --- test ---
let res1 = [], res2 = []
res1.push(firstMissingPositive1([]))                  // 1
res1.push(firstMissingPositive1([-4]))                // 1
res1.push(firstMissingPositive1([1, 2, 0]))           // 3
res1.push(firstMissingPositive1([3, 4, -1, 1]))       // 2
res1.push(firstMissingPositive1([7, 8, 9, 11, 12]))   // 1
res2.push(firstMissingPositive2([]))                  // 1
res2.push(firstMissingPositive2([-4]))                // 1
res2.push(firstMissingPositive2([1, 2, 0]))           // 3
res2.push(firstMissingPositive2([3, 4, -1, 1]))       // 2
res2.push(firstMissingPositive2([7, 8, 9, 11, 12]))   // 1
res2.push(firstMissingPositive2([5, 1, 2, 3, 4]))     // 6
res2.push(firstMissingPositive2([1, 1]))     // 2
console.log(res1, res2)


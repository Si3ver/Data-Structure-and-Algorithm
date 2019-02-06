// 在数组中出现次数超过一半的数
// 解法1： O(nlogn)  => 排序取中位数
var majorityElement1 = function(nums) {
    return nums.sort((x,y) => x-y)[Math.floor(nums.length/2)];
};
// 解法2： O(n) => 利用出现次数大于n/2的特点，递归思想。
var majorityElement2 = function(nums) {
    var cnt = 1, cur = nums[0];
    for (var i = 1, len = nums.length; i < len; ++i) {
        if (nums[i] === cur) {
            ++cnt;
        } else {
            --cnt;
            if (cnt === 0) {
                cur = nums[i+1];
            }
        }
    }
    return cur;
};

// --- test ---
let res = []
res.push(majorityElement1([3, 2, 3]))               // 3
res.push(majorityElement1([2, 2, 1, 1, 1, 2, 2]))   // 2
res.push(majorityElement1([3, 3, 4]))               // 3
res.push(majorityElement1([6, 5, 5]))               // 5
res.push(majorityElement2([3, 2, 3]))
res.push(majorityElement2([2, 2, 1, 1, 1, 2, 2]))
res.push(majorityElement2([3, 3, 4]))
res.push(majorityElement2([6, 5, 5]))
console.log(res)

// 三数之和
// O(n^2)  先排序，外层i遍历数组，内层左右双指针，寻找两数之和 = -nums[i]
var threeSum = function(nums) {
    var res = []
    nums.sort((x,y)=>x-y);
    for (var i = 0, len = nums.length; i < len-2; ++i) {
        if (i === 0 || nums[i] !== nums[i-1]) {                 // 去重
            var l = i + 1,
                r = len - 1;
            while (l < r) {
                var s = nums[i] + nums[l] + nums[r];
                if (s === 0) {
                    res.push([nums[i], nums[l++], nums[r--]]);
                    while (l < r && nums[l] === nums[l-1])  ++l; // 去重
                    while (l < r && nums[r] === nums[r+1])  --r; // 去重
                } else if (s > 0) {
                    --r;
                } else {
                    ++l;
                }
            }
        }
    }
    return res;
};

// --- test ---
var res = threeSum([-1, 0, 1, 2, -1, -4])
console.log(res);

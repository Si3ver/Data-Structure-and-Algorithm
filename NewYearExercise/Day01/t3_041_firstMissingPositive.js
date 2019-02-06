// 寻找缺失的最小正数
// 思路：利用哈希表先把出现的正数存起来，再搜索哈希表   时间复杂度 O(n)，空间复杂度 O(n)
var firstMissingPositive = function(nums) {
    if (!nums || nums.length === 0) return 1;
    var map = {}, max = nums[0], cnt = 0;
    nums.forEach(item=>{
        if (item > 0) {
            if(!(item in map) && !map[item]) {
                map[item] = true;
                ++cnt;
                if (max < item) {
                    max = item;
                }
            }
        }
    });
    if (cnt === 0) return 1;
    for (var i = 1; i <= max; ++i) {
        if (!map[i]) {
            return i;
        }
    }
    return max + 1;
};

// --- test ---
let res = []
res.push(firstMissingPositive([]))                  // 1
res.push(firstMissingPositive([-4]))                // 1
res.push(firstMissingPositive([1, 2, 0]))           // 3
res.push(firstMissingPositive([3, 4, -1, 1]))       // 2
res.push(firstMissingPositive([7, 8, 9, 11, 12]))   // 1
console.log(res)

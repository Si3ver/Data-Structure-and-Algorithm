// 数组中的第K个最大元素
// 解法1： 冒泡k次， O(nk)
var findKthLargest1 = function(nums, k) {
    if (nums.length < k) return NaN;
    for (let i = nums.length - 1; i > 0 && k >= 0; --i) {
        for (let j = 0; j < i; ++j) {
            if (nums[j] > nums[j+1]) {
                let tmp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = tmp
            }
        }
    }
    return nums[nums.length - k]
};

// 解法2： partition法。 O(nlogk)
// 每次while子循环找到第len - pivotIdx大的数。
var findKthLargest2 = function(nums, k) {
    // 特殊情况
    if (nums.length < k) return NaN
    if (nums.length === 1 && k === 1) return nums[0]

    let partition = (arr, left, right) => {
        let pivot = arr[left]
        while (left < right) {
            while (left < right && arr[right] >= pivot) --right
            if (left < right) arr[left] = arr[right]
            while (left < right && arr[left] <= pivot) ++left
            if (left < right) arr[right] = arr[left]
        }
        arr[left] = pivot
        return left
    }
    let left = 0, right = nums.length - 1
    while (left < right) {
        let pivotIdx = partition(nums, left, right)
        if (pivotIdx === nums.length - k) {
            return nums[pivotIdx]
        } else if (pivotIdx > nums.length - k) {      // pivot比要找的数大，往左继续
            right = pivotIdx - 1
        } else {                                      // pivot比要找的数小，往右继续
            left = pivotIdx + 1
        }
    }
    return nums[left]
};

// 解法3： 利用堆（heap）。 
// 思路：初始化一个大小为k的小顶堆，然后依次判断后续元素是否大于堆顶元素，若大于，则入堆。 O(nlogk)
// 参考 leetCode 703题，数据流中的第K大元素

// --- test ---
console.log(findKthLargest1([3,2,1,5,6,4], 2))         // 5
console.log(findKthLargest1([3,2,3,1,2,4,5,5,6], 4))   // 4
console.log(findKthLargest2([3,2,1,5,6,4], 2))         // 5
console.log(findKthLargest2([3,2,3,1,2,4,5,5,6], 4))   // 4
console.log(findKthLargest2([2,1], 2))                 // 1

// 数组中的第K个最大元素
// 解法1： 冒泡k次， O(nk)
// 冒泡 k 次 O(nk)
var findKthLargest1 = function(nums, k) {
  if (nums.length < k) return;
  for (let i = nums.length - 1; i >= nums.length - k - 1; --i) {
    for (let j = 0; j < i; ++j) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums[nums.length - k];
};

// 解法2： partition法。 O(nlogn)
// 每次while子循环找到第len - pivotIdx大的数。
var findKthLargest2 = function(nums, k) {
  if (nums.length < k) return;
  if (nums.length === 1 && k === 1) return nums[0];

  const partition = (lo, hi) => {
    const mid = lo + ((hi - lo) >> 1); // 选中间, 避免重复元素过多时，退化为 O(n^2)
    // 交换 lo <-> mid
    const pivot = nums[mid];
    nums[mid] = nums[lo];
    nums[lo] = pivot;

    while (lo < hi) {
      while (lo < hi && nums[hi] >= pivot) --hi;
      if (lo < hi) nums[lo] = nums[hi];
      while (lo < hi && nums[lo] <= pivot) ++lo;
      if (lo < hi) nums[hi] = nums[lo];
    }
    nums[lo] = pivot;
    return lo;
  }

  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    const pivotIdx = partition(lo, hi);
    if (pivotIdx === nums.length - k) {
      return nums[pivotIdx];
    } else if (pivotIdx > nums.length - k) {
      hi = pivotIdx - 1;
    } else {
      lo = pivotIdx + 1;
    }
  }
  return nums[lo];
}

// 解法3： 利用堆（heap）。
// 思路：初始化一个大小为k的小顶堆，然后依次判断后续元素是否大于堆顶元素，若大于，则入堆。 O(nlogk)
// 参考 leetCode 703题，数据流中的第K大元素

// --- test ---
console.log(findKthLargest1([3,2,1,5,6,4], 2))         // 5
console.log(findKthLargest1([3,2,3,1,2,4,5,5,6], 4))   // 4
console.log(findKthLargest2([3,2,1,5,6,4], 2))         // 5
console.log(findKthLargest2([3,2,3,1,2,4,5,5,6], 4))   // 4
console.log(findKthLargest2([2,1], 2))                 // 1

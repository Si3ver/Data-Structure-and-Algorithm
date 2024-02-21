// 数组中的第K个最大元素
// 解法1： 冒泡k次， O(nk)
// 冒泡 k 次 O(nk)
var findKthLargest1 = function(arr, k) {
  const n = arr.length;
  for (let i = n - 1; i > n - 1 - k; --i) {
    for (let j = 0; j < i; ++j) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    // console.log(arr)
  }
  return arr[n - k];
};

// 解法2： partition法。 O(nlogk)
// 每次while子循环找到第len - pivotIdx大的数。
var findKthLargest2 = function(arr, k) {
  const partition = (lo, hi) => {
    const mid = lo + ((hi - lo) >> 1);
    const pivot = arr[mid];
    arr[mid] = arr[lo];
    arr[lo] = pivot;
    while (lo < hi) {
      while (lo < hi && arr[hi] >= pivot) --hi;
      if (lo < hi) arr[lo] = arr[hi];
      while (lo < hi && arr[lo] <= pivot) ++lo;
      if (lo < hi) arr[hi] = arr[lo];
    }
    arr[lo] = pivot;
    return lo;
  }

  const n = arr.length;
  let lo = 0, hi = n - 1;
  while (lo < hi) {
    const pivotIndex = partition(lo, hi);
    if (pivotIndex === n - k) {
      return arr[pivotIndex];
    } else if (pivotIndex > n - k) {
      hi = pivotIndex - 1;
    } else {
      lo = pivotIndex + 1;
    }
  }
  return arr[lo];
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

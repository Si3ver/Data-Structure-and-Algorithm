// BST heap: top O(1) | delete O(logn) | insert O(logn) | merge O(n)
// Fib heap: top O(1) | delete O(logn) | insert O(1)    | merge O(1)

// 思路： k节点小顶堆， top K 即 小顶堆中最小的元素。每次add

/**
 * @param {number} k
 * @param {number[]} nums
 */
// 解法一：O (nlongn)
var KthLargest = function (k, nums) {
  nums.sort((a, b) => a - b)
  this.k = k
  this.arr = [null] // trick of bst
  this.arr.push(...nums.slice(-k))  // k节点的小顶堆
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.arr.length <= this.k) {   // 堆没满
    this.arr.push(val)
    // 新增val && 上浮
    let idx = this.arr.length - 1
    while (idx >= 2 && this.arr[idx] < this.arr[idx >> 1]) {
      let tmp = this.arr[idx >> 1]
      this.arr[idx >> 1] = this.arr[idx]
      this.arr[idx] = tmp
      idx = idx >> 1
    }
  } else if (val > this.arr[1]) {     // 堆满了，且来了个大数
    // 1. 删除堆顶 & 下沉
    this.arr[1] = this.arr[this.k]
    let idx = 1
    while (idx << 1 <= this.k - 1 && this.arr[idx] > Math.min(this.arr[idx << 1], this.arr[(idx << 1) + 1])) {
      let targetIdx = this.arr[idx << 1] <= this.arr[(idx << 1) + 1] ? idx << 1 : (idx << 1) + 1
      let tmp = this.arr[idx]
      this.arr[idx] = this.arr[targetIdx]
      this.arr[targetIdx] = tmp
      idx = targetIdx
    }
    // 新增val & 上浮
    this.arr[this.k] = val
    idx = this.k
    while (idx >= 2 && this.arr[idx] < this.arr[idx >> 1]) {
      let tmp = this.arr[idx >> 1]
      this.arr[idx >> 1] = this.arr[idx]
      this.arr[idx] = tmp
      idx = idx >> 1
    }
  }
  return this.arr[1]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// 解法二：O(n) init
class KthLargest2 {
  constructor(k, nums) {
    this.minHeap = [null];  // heap
    this.last = 0;          // heap size
    this.k = k;
    this.nums = nums;

    this.initMinHeap();
  }

  initMinHeap() {
    for (let i = 1; i <= this.k && i <= this.nums.length; i++) {
      this.minHeap.push(this.nums[i - 1]);
      this.last = i;
    }

    if (this.last === this.k) {
      this.order();
      for (let i = this.k; i < this.nums.length; i++) {
        this.add(this.nums[i]);
      }
    }
  }

  add(number) {
    if (this.last < this.k) {
      this.minHeap.push(number);
      this.last++;
      this.order();
    }
    else if (number > this.minHeap[1]) {
      this.minHeap[1] = number;
      this.sink(1);
    }
    return this.minHeap[1];
  }

  order() {
    for (let i = Math.floor(this.k / 2); i > 0; i--) {
      this.sink(i);
    }
  }

  sink(i) {
    while (2 * i <= this.k) {
      let j = 2 * i;
      if (this.minHeap[j] > this.minHeap[j + 1]) {
        j++;
      }
      if (this.minHeap[i] > this.minHeap[j]) {
        this.swap(i, j);
        i = j;
      }
      else {
        break;
      }
    }
  }

  swap(i, j) {
    const tmp = this.minHeap[i];
    this.minHeap[i] = this.minHeap[j];
    this.minHeap[j] = tmp;
  }
}


// test case
let arr = [4, 5, 8, 2];
let kthLargest = new KthLargest(3, arr);
console.log(kthLargest.add(3))  // returns 4
console.log(kthLargest.add(5))  // returns 5
console.log(kthLargest.add(10))  // returns 5
console.log(kthLargest.add(9))  // returns 8
console.log(kthLargest.add(4), '\n')  // returns 8

let arr2 = [4, 5, 8, 2];
let kthLargest2 = new KthLargest2(3, arr);
console.log(kthLargest2.add(3))  // returns 4
console.log(kthLargest2.add(5))  // returns 5
console.log(kthLargest2.add(10))  // returns 5
console.log(kthLargest2.add(9))  // returns 8
console.log(kthLargest2.add(4))  // returns 8

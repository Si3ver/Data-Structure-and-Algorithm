/**
 * https://leetcode.cn/problems/find-median-from-data-stream
 * 数据流中的中位数
 *
 */

/** 先实现一个堆 */
class Heap {
  constructor(compare) {
    this.arr = [0]; // 忽略 0 这个索引,方便计算左右节点
    this.compare = compare ? compare : (a, b) => a > b; // 默认是大顶堆
  }
  get size() {
    return this.arr.length - 1;
  }
  // 新增元素
  push(item) {
    this.arr.push(item);
    this.shiftUp(this.arr.length - 1);
  }
  // 元素上浮，k 是索引
  shiftUp(k) {
    let { arr, compare, parent } = this;
    // 当前元素 > 父元素，则进行交换
    while (k > 1 && compare(arr[k], arr[parent(k)])) {
      this.swap(parent(k), k);
      k = parent(k); // 更新 k 的位置为父元素的位置（交换了位置）
    }
  }
  // 弹出堆顶
  pop() {
    if (this.arr.length == 1) return null;
    this.swap(1, this.arr.length - 1);// 将结尾元素和堆顶元素交换位置
    let head = this.arr.pop(); // 删除堆顶
    this.sinkDown(1); // 再做下沉操作
    return head;
  }
  // 元素下沉
  sinkDown(k) {
    let { arr, compare, left, right, size } = this;
    while (left(k) <= size) {
      // 1. 拿到左右节点的最大值
      let child = left(k);
      if (right(k) <= size && compare(arr[right(k)], arr[child])) {
        child = right(k);
      }
      // 2. k 满足大顶堆或小顶堆，什么都不做
      if (compare(arr[k], arr[child])) {
        return;
      }
      // 3. 交换位置后，继续下沉操作
      this.swap(k, child);
      k = child; // 更新位置
    }
  }
  // 获取堆顶元素
  peek() {
    return this.arr[1];
  }
  // 获取左边元素节点
  left(k) {
    return k * 2;
  }
  // 获取右边元素节点
  right(k) {
    return k * 2 + 1;
  }
  // 获取父节点
  parent(k) {
    return Math.floor(k >> 1);
  }
  // i、j 交换位置
  swap(i, j) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
  }
}

// ---- MF 实现 ----
var MedianFinder = function() {
  // 大顶堆，存小的一半
  this.maxHeap = new Heap((a, b) => a > b);
  // 小顶堆，存大的一半
  this.minHeap = new Heap((a, b) => a < b);
};

MedianFinder.prototype.addNum = function(num) {
  if (!this.maxHeap.size || num < this.maxHeap.peek()) {
    this.maxHeap.push(num);
  } else {
    this.minHeap.push(num);
  }

  // 维护两堆的平衡
  if (this.maxHeap.size - this.minHeap.size > 1) {
    this.minHeap.push(this.maxHeap.pop()); // 大 -> 小
  }
  if (this.minHeap.size > this.maxHeap.size) {
    this.maxHeap.push(this.minHeap.pop()); // 小 -> 大
  }
};

MedianFinder.prototype.findMedian = function() {
  if ((this.maxHeap.size + this.minHeap.size) % 2 === 0) {
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
  return this.maxHeap.peek();
};

// ---- test case ----
const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // 1.5
mf.addNum(3);
console.log(mf.findMedian()); // 2

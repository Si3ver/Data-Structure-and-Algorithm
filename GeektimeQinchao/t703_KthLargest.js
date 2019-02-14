// 数据流中的第K大元素
// 考察优先队列, 用一个大小为k的小顶堆存储前k个元素
var KthLargest = function(k, nums) {
    nums.sort((a,b)=>(a-b))
    this.k = k
    this.arr = [null]
    this.arr.push(...nums.slice(-k)) //创建小顶堆，保存一个占位符和最大的k个元素
};

KthLargest.prototype.add = function(val) {
    if(this.arr.length <= this.k){   // 堆没满
        this.arr.push(val)
        // 新增val && 上浮
        let idx = this.arr.length - 1
        while (idx >= 2 && this.arr[idx] < this.arr[idx>>1]) {
            let tmp = this.arr[idx>>1]
            this.arr[idx>>1] = this.arr[idx]
            this.arr[idx] = tmp
            idx = idx>>1
        }
    }else if(val > this.arr[1]){     // 堆满了，且来了个大数
        // 1. 删除堆顶 & 下沉
        this.arr[1] = this.arr[this.k]
        let idx = 1
        while (idx<<1 <= this.k - 1 && this.arr[idx] > Math.min(this.arr[idx<<1], this.arr[(idx<<1) + 1])) {
            let targetIdx = this.arr[idx<<1] <= this.arr[(idx<<1)+1] ? idx<<1 : (idx<<1)+1
            let tmp = this.arr[idx]
            this.arr[idx] = this.arr[targetIdx]
            this.arr[targetIdx] = tmp
            idx = targetIdx
        }
        // 新增val & 上浮
        this.arr[this.k] = val
        idx = this.k
        while (idx >= 2 && this.arr[idx] < this.arr[idx>>1]) {
            let tmp = this.arr[idx>>1]
            this.arr[idx>>1] = this.arr[idx]
            this.arr[idx] = tmp
            idx = idx>>1
        }
    }
    return this.arr[1]
};

// --- test1 ---
// let res = [];
// let priorityQueue = new KthLargest(3, [4, 5, 8, 2]);
// res.push(priorityQueue.add(3));   // returns 4
// res.push(priorityQueue.add(5));   // returns 5
// res.push(priorityQueue.add(10));  // returns 5
// res.push(priorityQueue.add(9));   // returns 8
// res.push(priorityQueue.add(4));   // returns 8
// console.log(res);

// --- test2 --- 
let res2 = [];
let priorityQueue = new KthLargest(7, [-10,1,3,1,4,10,3,9,4,5,1]);
res2.push(priorityQueue.add(3));  // 3
res2.push(priorityQueue.add(2));  // 3 
res2.push(priorityQueue.add(3));  // 3
res2.push(priorityQueue.add(1));  // 3
res2.push(priorityQueue.add(2));  // 3
res2.push(priorityQueue.add(4));  // 3
res2.push(priorityQueue.add(5));  // 4
res2.push(priorityQueue.add(5));  // 4
res2.push(priorityQueue.add(6));  // 4
res2.push(priorityQueue.add(7));  // 5
res2.push(priorityQueue.add(7));  // 5
res2.push(priorityQueue.add(8));  // 5
res2.push(priorityQueue.add(2));  // 5
res2.push(priorityQueue.add(3));  // 5
res2.push(priorityQueue.add(1));  // 5
res2.push(priorityQueue.add(1));  // 5
res2.push(priorityQueue.add(1));  // 5
res2.push(priorityQueue.add(10)); // 6
res2.push(priorityQueue.add(11)); // 7
res2.push(priorityQueue.add(5));  // 7
res2.push(priorityQueue.add(6));  // 7
res2.push(priorityQueue.add(2));  // 7
res2.push(priorityQueue.add(4));  // 7
res2.push(priorityQueue.add(7));  // 7
res2.push(priorityQueue.add(8));  // 7
res2.push(priorityQueue.add(5));  // 7
res2.push(priorityQueue.add(6));  // 7
console.log(res2);

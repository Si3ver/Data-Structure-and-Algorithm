// 设计循环双端队列
// 这道题利用了灵活的 js数组，投机取巧~
var MyCircularDeque = function(k) {
    this.arr = [];
    this.maxLen = k;
    return this;
};

MyCircularDeque.prototype.insertFront = function(value) {
    if (this.arr.length === this.maxLen) {
        return false;
    } else {
        this.arr.unshift(value);
        return true;
    }
};

MyCircularDeque.prototype.insertLast = function(value) {
    if (this.arr.length === this.maxLen) {
        return false;
    } else {
        this.arr.push(value);
        return true;
    } 
};

MyCircularDeque.prototype.deleteFront = function() {
    if (this.arr.length === 0) {
        return false;
    } else {
        this.arr.shift();
        return true;
    }  
};

MyCircularDeque.prototype.deleteLast = function() {
    if (this.arr.length === 0) {
        return false;
    } else {
        this.arr.pop();
        return true;
    }
};

MyCircularDeque.prototype.getFront = function() {
    if (this.arr.length === 0) {
        return -1;
    } else {
        return this.arr[0];
    }
};

MyCircularDeque.prototype.getRear = function() {
    if (this.arr.length === 0) {
        return -1;
    } else {
        return this.arr[this.arr.length - 1];
    }
};

MyCircularDeque.prototype.isEmpty = function() {
    return this.arr.length === 0;
};

MyCircularDeque.prototype.isFull = function() {
    return this.arr.length === this.maxLen;
};

// --- test ---
let res = []
let q = new MyCircularDeque(3)
res.push(q.insertLast(1))
res.push(q.insertLast(2))
res.push(q.insertFront(3))
res.push(q.insertFront(4))
res.push(q.getRear())
res.push(q.isFull())
res.push(q.deleteLast())
res.push(q.insertFront(4))
res.push(q.getFront())
console.log(res)

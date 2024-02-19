/**
 * https://leetcode.cn/problems/min-stack
 * 最小栈
 * medium
 *
 * 思路：单独维护一个 minStack 数组
 */

class MinStack {
  constructor () {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    const n = this.minStack.length;
    if (n > 0) {
      const top = this.minStack[n - 1];
      this.minStack.push(Math.min(top, val)); // min value
    } else {
      this.minStack.push(val);
    }
  }

  pop() {
    this.minStack.pop();
    this.stack.pop();
  }

  top() {
    const n = this.stack.length;
    return n ? this.stack[n - 1] : Infinity;
  }

  getMin() {
    const n = this.minStack.length;
    return n ? this.minStack[n - 1] : Infinity;
  }
}

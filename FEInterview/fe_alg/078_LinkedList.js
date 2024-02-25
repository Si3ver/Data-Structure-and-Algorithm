function LinkedNode(val, next = null) {
  this.val = val;
  this.next = next;
}

class LinkedList {
  constructor () {
    this.head = null;
  }
  push(val) {
    if (!this.head) {
      this.head = new LinkedNode(val);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new LinkedNode(val);
    }
  }
}

// --- test case ----
const l = new LinkedList();
l.push(10);
l.push(8);
l.push(9);

console.log(JSON.stringify(l, null, 2));

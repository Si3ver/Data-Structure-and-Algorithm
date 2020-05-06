var reverseKGroup = function(head, k) {
  let headPrev = new ListNode(-1)
  headPrev.next = head
  let prev = headPrev, p = head, pList = new Array(k)
  while (p) {
    let i = 0
    for (; i < k; ++i) { // prev, ...pList, next
      if (p) {
        pList[i] = p
        p = p.next
      } else {
        break
      }
    }
    if (i === k) {
      let next = pList[pList.length - 1].next
      prev.next = pList[pList.length - 1]
      for (let j = pList.length - 1; j > 0; --j) {
        pList[j].next = pList[j-1]
      }
      prev = pList[0] // prepare prev for next while loop
      pList[0].next = next
    }
  }
  return headPrev.next
};

// test tools
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function printLinkList(head) {
  let pointer = head, arr = []
  while (pointer) {
    arr.push(pointer.val)
    pointer = pointer.next
  }
  arr.push('NULL')
  console.log(arr.join(' -> '))
}
// test case init | 注意：头指针指向第一个节点（而非头指针的next）
let head = new ListNode(1)
let pointer = head
for (let i = 2; i < 11; ++i) {
  pointer.next = new ListNode(i)
  pointer = pointer.next
}
printLinkList(head)
// test
head = reverseKGroup(head, 3)
printLinkList(head)

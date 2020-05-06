var reverseList = function(head) {
  let pPrev = null, pCurr = head
  while(pCurr) {
    let pNext = pCurr.next
    pCurr.next = pPrev
    pPrev = pCurr
    pCurr = pNext
  }
  return pPrev
};

var swapPairs = function(head) {
  let headPrev = new ListNode(-1) // trick: new Empty Node
  headPrev.next = head
  let p1 = head, p1Prev = headPrev
  while (p1 && p1.next) {
    let p2 = p1.next, p2Next = p2.next
    p1Prev.next = p2
    p2.next = p1
    p1.next = p2Next
    p1Prev = p1 // prepare p1Prev & p1
    p1 = p2Next
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
for (let i = 2; i < 10; ++i) {
  pointer.next = new ListNode(i)
  pointer = pointer.next
}
printLinkList(head)
// test
head = swapPairs(head)
printLinkList(head)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null, curr = head
  while (curr) {
    let next = curr.next
    curr.next = prev  // 改变指针
    prev = curr
    curr = next
  }
  return prev
}

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
// test case init
let head = new ListNode(1)
let pointer = head
for (let i = 2; i < 6; ++i) {
  pointer.next = new ListNode(i)
  pointer = pointer.next
}
printLinkList(head)
// test
head = reverseList(head)
printLinkList(head)

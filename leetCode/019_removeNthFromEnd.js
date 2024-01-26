/**
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list
 * 删除链表中倒数第N个节点
 * medium
 */

// 双指针
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(-1, head);
  let fast = dummy, slow = dummy;
  while (n-- >= 0 && fast) { // n + 1 step
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next ? slow.next.next : null;
  return dummy.next;
}

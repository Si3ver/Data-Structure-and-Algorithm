/**
 * https://leetcode.cn/problems/linked-list-cycle-ii
 * 环形链表II
 * medium
 */

var detectCycle = function(head) {
  let slow = head, fast = head, hasCycle = false;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      hasCycle = true;
      break;
    }
  }
  if (hasCycle) {
    fast = head;
    while (slow && fast && slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }
  return null;
};

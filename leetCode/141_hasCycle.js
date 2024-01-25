/**
 * https://leetcode.cn/problems/linked-list-cycle
 * 环形链表
 * easy
 */

var hasCycle = function (head) {
  let slow = head, fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

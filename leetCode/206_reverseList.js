/**
 * https://leetcode.cn/problems/reverse-linked-list
 * 反转链表
 * easy
 */

var reverseList = function (head) {
  let prev = null;
  while (head) {
    const current = head;
    head = head.next;
    current.next = prev;
    prev = current;
  }
  return prev;
}

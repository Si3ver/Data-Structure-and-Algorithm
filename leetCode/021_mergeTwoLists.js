/**
 * https://leetcode.cn/problems/merge-two-sorted-lists/
 * 合并两个有序链表
 * easy
 */

var mergeTwoLists = function (l1, l2) {
  const dummyHead = new ListNode(-1);
  let p = dummyHead;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }
  p.next = l1 || l2;
  return dummyHead.next;
}


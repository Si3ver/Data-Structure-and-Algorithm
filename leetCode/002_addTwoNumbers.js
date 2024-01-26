/**
 * https://leetcode.cn/problems/add-two-numbers/
 * 两数相加
 * medium
 */

var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(-1), p = dummyHead, carry = 0;
  while (l1 || l2) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;

    p.next = new ListNode(sum);
    p = p.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry) {
    p.next = new ListNode(carry);
  }
  return dummyHead.next;
}

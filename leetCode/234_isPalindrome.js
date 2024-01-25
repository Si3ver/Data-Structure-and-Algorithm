/**
 * https://leetcode.cn/problems/palindrome-linked-list
 * 回文链表
 * easy
 *
 */

// 暴力法：先存到数组内 O(n) O(n)
var isPalindrome1 = function (head) {
  const vals = [];
  while (head) {
    vals.push(head.val);
    head = head.next;
  }
  let lo = 0, hi = vals.length - 1;
  while (lo < hi && vals[lo] === vals[hi]) {
    ++lo;
    --hi;
  }
  return lo >= hi;
}


// 解法2: 快慢指针 空间复杂度O(1)
/**
 *               tmp
 * 1 -> 2 -> 3 -> 2 -> 1 -> null
 *     prev slow      fast
 * ----->
 * 1 -> 2 -> null
 *          null <- 2 <- 1 <- head2
 *
 *
 * 1 -> 2 -> 3 -> 3 -> 2 -> 1 -> null
 *         prev  slow            fast
 * ----->
 * 1 -> 2 -> 3 -> null
 *         null <- 3 <- 2 <- 1 <- head2
 *
 */
var isPalindrome = function (head) {
  if (head == null || head.next == null) {
    return true;
  }
  let fast = head, slow = head, prev;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null; // partition into 2 part
  // reverse 2nd part
  let head2 = null;
  while (slow) {
    const tmp = slow.next;
    slow.next = head2;
    head2 = slow;
    slow = tmp;
  }
  // 比对 head2 与 head 两个链表
  while (head && head2) {
    if (head.val !== head2.val) {
      return false;
    }
    head = head.next;
    head2 = head2.next;
  }
  return true;
}

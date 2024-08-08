// O(n) O(n) 解法，但需要加锁
function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) return true
  let slow: ListNode | null = head, fast: ListNode | null = head, prev;
  while (fast && fast.next && slow && slow.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev && (prev.next = null);
  let head2 = null;
  while (slow) {
    const next: ListNode | null = slow.next;
    slow.next = head2;
    head2 = slow;
    slow = next;
  }
  while (head && head2) {
    if (head.val !== head2.val) return false;
    head = head.next;
    head2 = head2.next;
  }
  return true;
}

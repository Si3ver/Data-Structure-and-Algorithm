export function hasCycle(head: ListNode | null): boolean {
  let slow = head, fast = head;
  while (slow && fast && fast.next ) {
    fast = fast.next.next;
    slow = slow.next!;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

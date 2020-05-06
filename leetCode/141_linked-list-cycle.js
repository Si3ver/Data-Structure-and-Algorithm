var hasCycle = function(head) {
  let slow = head, fast = head
  while (fast && fast.next && slow) {
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) {
      return true
    }
  }
  return false
};

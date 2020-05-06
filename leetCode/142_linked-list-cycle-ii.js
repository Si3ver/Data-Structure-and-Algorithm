/**
 * 数学原理：
 * 第一次相遇， f = 2s, f = s + nb => s = nb, f = 2nb
 * 第二次相遇，f 从头走，步长为 1。 s 比 f 多走了nb。 
 * 即一开始 f = 0, s = nb；
 * a步后，f = a, s = a + nb。f刚好走过了最开始一截儿a，a为相交的起点。
 */
var detectCycle = function(head) {
  let slow = head, fast = head, hasCycle = false;
  while(fast && fast.next && slow) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow){
          hasCycle = true;
          break;
      }
  }
  if(hasCycle) {
      fast = head;
      while(fast && slow && fast !== slow){
          fast = fast.next;
          slow = slow.next;
      }
      return fast;
  }
  return null;
};

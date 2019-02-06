// 环形链表
// 思路： 快慢指针
var hasCycle = function(head) {
    var slow = fast = head;
    while (fast && fast.next && slow) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
};

// --- no need test ---

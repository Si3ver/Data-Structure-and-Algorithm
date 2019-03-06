/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    if (!head || k <= 0) return null
    let front = head, rear = head
    while (k) {
        if (!front){
            return null
        } else {
            front = front.next
            --k
        }
    }
    while (front) {
        front = front.next
        rear = rear.next
    }
    return rear
}
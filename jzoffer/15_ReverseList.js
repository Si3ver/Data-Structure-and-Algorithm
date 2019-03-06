/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(head)
{
    let cur = head, prev = null
    while (cur) {
        let tmpNext = cur.next
        cur.next = prev
        prev = cur
        cur = tmpNext
    }
    return prev
}
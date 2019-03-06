/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(head1, head2)
{
    let root = new ListNode(-1), p = root, p1 = head1, p2 = head2
    while (p1 && p2) {
        if (p1.val <= p2.val) {
            p.next = p1
            p1 = p1.next
        } else {
            p.next = p2
            p2 = p2.next
        }
        p = p.next
    }
    p.next = p1 === null ? p2 : p1
    return root.next
}
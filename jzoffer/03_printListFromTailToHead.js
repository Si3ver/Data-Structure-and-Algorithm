/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    let res = [], p = head
    while (p) {
        res.unshift(p.val)
        p = p.next
    }
    return res
}
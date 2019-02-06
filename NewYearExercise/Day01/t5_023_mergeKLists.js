// 合并K个排序链表
// 思路1： 两两合并 => 时间复杂度较高，需要重复扫描合并后的数组。
var mergeTwoLists = function(head1, head2) {
    var newHead = new ListNode(-1), p = newHead;
    while (head1 && head2) {
        if (head1.val <= head2.val) {
            p.next = head1;
            head1 = head1.next;
        } else {
            p.next = head2;
            head2 = head2.next;
        }
        p = p.next;
    }
    if (head1)    p.next = head1;
    if (head2)    p.next = head2;
    return newHead.next;
};

var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) {
        return null;                        // ！返回一个空链表
    }else if (lists.length === 1) {
        return lists[0];
    }
    return lists.reduce((merged, current) => (
        mergeTwoLists(merged, current)
    ));
};

// 思路2： 一次性合并 => 复杂度为 O(kn)
var mergeKLists2 = function(lists) {
    // todo
};

// --- test ---
function ListNode(val) {
    this.val = val;
    this.next = null;
}
function conlList(arr) {
    var head = new ListNode(-1), p = head;
    arr.forEach((item) => {
        p.next = new ListNode(item);
        p = p.next;
    })
    return head.next;
}
function printlList(head) {
    var res = [], p = head;
    while (p) {
        res.push(p.val);
        p = p.next;
    }
    console.log(res.join(' -> '))
}
let l1 = conlList([1, 4, 5]);
let l2 = conlList([1, 3, 4]);
printlList(l1);
printlList(l2);
let l3 = mergeTwoLists(l1, l2);
printlList(l3);

console.log(mergeKLists([]))

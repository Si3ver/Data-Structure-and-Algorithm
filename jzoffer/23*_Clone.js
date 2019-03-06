// 递归写法~~
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead) {
    if (pHead == null) return null;
    var CloneHead = new RandomListNode(pHead.label);
    CloneHead.random = pHead.random;
    CloneHead.next = Clone(pHead.next);
    return CloneHead;
  }
  
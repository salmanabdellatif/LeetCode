/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
var mergeNodes = function(head) {
    let curNode = head.next
    let sum = 0
    const dummyNode = new ListNode(0);
    let newList = dummyNode;

    while (curNode) {
    if (curNode.val !== 0) {
      sum += curNode.val;
    } else {
      if (sum !== 0) {
        newList.next = new ListNode(sum);
        newList = newList.next;
        sum = 0;
      }
    }
    curNode = curNode.next;
  }
    return dummyNode.next
};
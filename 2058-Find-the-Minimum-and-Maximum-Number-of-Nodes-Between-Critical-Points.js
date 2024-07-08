/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    if(!head || !head.next || !head.next.next){
        return [-1, -1]
    }
    let i = 2
    let prev = head
    let curr = head.next
    let next = head.next.next
    let criticalPoints = []
    while(next){
        if((prev.val>curr.val && curr.val<next.val) || (prev.val<curr.val && curr.val>next.val) ){
            criticalPoints.push(i)
        }
        i++
        prev = curr
        curr = next
        next = next.next
    }
    if(criticalPoints.length < 2){
        return [-1, -1]
    }
    let min = Infinity
    let max = criticalPoints[criticalPoints.length-1] - criticalPoints[0]
    for(let i = 0;i < criticalPoints.length-1; i++){
        min = Math.min(min, criticalPoints[i+1] - criticalPoints[i])
    }
    return [min, max]
};

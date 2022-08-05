/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let slow = head;
    let fast = head;
    while(fast){
        try{
            fast = fast.next.next;
        }
        catch{
            return false;
        }
        if(slow === fast) return true;
        slow = slow.next;
    }
    return false;
};
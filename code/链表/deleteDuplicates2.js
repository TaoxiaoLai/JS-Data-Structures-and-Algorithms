// 链表的基本操作（删除）
// 给定一个排序链表，删除所有含有重复数字的结点，
// 只保留原始链表中 没有重复出现的数字。
// 输入: 1->2->3->3->4->4->5
// prehead -> 1 -> 2 -> (3 ->) 3 -> 4 -> ...
//                                 cur   x=3
//                x = cur.next.val
// 
// 输出: 1->2->5  
 
function deleteDuplicates(head) {
    let prehead = new ListNode()
    prehead.next = head
    let cur = prehead
    // 遍历整个链表 
    while (cur.next !== null && cur.next.next !== null) {
        // 先判断是否有重复元素
        if (cur.next.val === cur.next.next.val) {
            let x = cur.next.val
            // 删除所有重复元素
            while (cur.next !== null && cur.next.val === x) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return prehead.next
}
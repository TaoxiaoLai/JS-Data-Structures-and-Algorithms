// 链表的基本操作（合并）
// 将两个有序链表合并为一个新的有序链表并返回。
// 新链表是通过拼接给定的两个链表的所有结点组成的。
// 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
//         l1    l2
// cur -> l1

function mergeTwoLists(l1, l2) {
    let prehead = new ListNode()
    let cur = prehead
    while(l1 !== null && l2 !== null) {
        if(l1.val >= l2.val) {
            cur.next = l2
            l2 = l2.next
        } else {
            cur.next = l1
            l1 = l1.next
        }
        cur = cur.next
    }
    cur.next = l1!==null?l1:l2
    return prehead.next
}

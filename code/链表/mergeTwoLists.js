// 链表的基本操作（合并）
// 将两个有序链表合并为一个新的有序链表并返回。
// 新链表是通过拼接给定的两个链表的所有结点组成的。
// 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4

function mergeTwoLists(l1, l2) {
    let prehead = new ListNode()
    let cur = prehead
    while (l1.next && l2.next) {
        if (l1.val <= l2.val) {
            cur.next = l1
            cur = cur.next
            l1 = l1.next
        } else {
            cur.next = l2
            cur = cur.next
            l2 = l2.next
        }
    }
    if (l1.next) {
        cur.next = l1
    } else {
        cur.next = l2
    }
    return prehead.next
}
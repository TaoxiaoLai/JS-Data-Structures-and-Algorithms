// 链表的基本操作（删除）
// 给定一个排序链表，删除所有重复的元素，
// 使得每个元素只出现一次。
// 输入: 1->1->2->3->3
// 输出: 1->2->3


function deleteDuplicates(head) {
    let cur = head
    while (cur !== null && cur.next !== null) {
        if (cur.val = cur.next.val) {
            cur.next = cur.next.next
        }
        cur = cur.next
    }
    return head
}
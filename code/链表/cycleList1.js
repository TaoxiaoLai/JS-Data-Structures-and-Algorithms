// 链表的复杂操作之环形链表1
// 给定一个链表，判断链表中是否有环。
// 输入： 3->2->4->1->(2) 注意：此处的2是就是前面3后面的2
// 输出： true

function cycleList(head) {
    while(head) {
        if (head.flag) {
            return true
        } else {
            head.flag = true
            head = head.next
        }
    }
    return false
}
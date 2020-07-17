// 链表——局部反转一个链表
// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。



// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL
//        2      3      4
// 1  -> (2  <-  3  <-  4) ->  5  ->  NULL （反转之后）
//      start          pre    cur     next

// lefthead:m结点的前置结点        start:反转后的n结点
function reverseBetween(head, m, n) {
    let prehead = new ListNode()
    prehead.next = head
    // leftHead 记录m前面那个结点
    let leftHead = prehead
    // 让leftHead定位到m前面
    for (let i=0; i<m-1; i++) {
        leftHead = leftHead.next
    }
    // 注意pre不能是lefthead，不然会把lefthead也反转了
    let pre = leftHead.next
    let cur = pre.next
    // 记录开始位置，反转完之后要让它指向n后面那个结点(反转后的n结点其实就是反转前的m结点)
    let start = pre
    for (let i=m; i<n; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    leftHead.next = pre
    start.next = cur
    return prehead.next
}
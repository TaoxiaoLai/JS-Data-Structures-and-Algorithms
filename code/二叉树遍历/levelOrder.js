// 层序遍历的衍生问题

// 题目描述：给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
//  3
// / \
// 9  20
//   /  \
//  15   7
// 返回其层次遍历结果：
// [
//  [3],
//  [9,20],
//  [15,7]
// ]
const root = {
    val: "A",
    left: {
        val: "B",
        left: {
            val: "D"
        },
        right: {
            val: "E"
        }
    },
    right: {
        val: "C",
        right: {
            val: "F"
        }
    }
}

// queue [A] => [B,C] -> [C] [C, D, E] -> [D, E, F] => [D, E, F] => []
// [[A], [B,C], [D,E,F]]


function levelOrder(root) {
    let res = []
    if (!root) {
        return res
    }
    let query = []
    query.push(root)
    while(query.length) {  // 有几层就执行几次while
        let level = []
        
        // 关键一步
        let len = query.length  // len的长度就是每一层一共有几个几点

        for(let i=0; i<len; i++) {  // 每一层有几个结点，就执行几次for
            let top = query.shift()
            level.push(top.val)
            if(top.left) {
                query.push(top.left)
            }
            if(top.right) {
                query.push(top.right)
            }
        }
        res.push(level)
    }
    return res
}
console.log(levelOrder(root))
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

// 前序遍历
function preOrder(root) {
    if (root === null) {
        return
    }
    console.log('当前遍历的结点是：', root.val)
    preOrder(root.left)
    preOrder(root.right)
    return
}

// 中序遍历
function inOrder(root) {
    if (root === null) {
        return
    }
    inOrder(root.left)
    console.log('当前遍历的结点是：', root.val)
    inOrder(root.right)
    return
}

// 前序遍历
function postOrder(root) {
    if (root === null) {
        return
    }
    postOrder(root.left)
    postOrder(root.right)
    console.log('当前遍历的结点是：', root.val)
    return
}

// 层序遍历 —— 遍历的顺序就是一个先进先出的过程，所以要想到队列
// queue [A] => [B] [B,C] => [C] [C, D, E] => [D, E] [D, E, F]
// [[A], [B,C], [D,E,F]]
function bfs(root) {
    let res = []
    let query = []
    query.push(root)
    while(query.length) {
        let top = query.shift()
        res.push(top.val)
        if(top.left) {
            query.push(top.left)
        }
        if(top.right) {
            query.push(top.right)
        }
    }
    return res
}
console.log(bfs(root))
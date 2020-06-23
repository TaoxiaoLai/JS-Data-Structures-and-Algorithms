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
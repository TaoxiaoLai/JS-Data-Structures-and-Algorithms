// 二叉树遍历的迭代实现

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
function preorderTraversal(root) {
    if (!root) {
        return
    }
    const res = []
    const stack = []
    stack.push(root)
    while (stack.length) {
        let cur = stack.pop()
        res.push(cur.val)
        if (cur.right) {
            stack.push(cur.right)
        }
        if (cur.left) {
            stack.push(cur.left)
        }
    }
    return res
}
// console.log(preorderTraversal(root))


// 后续遍历
function inorderTraversal(root) {
    if (!root) {
        return 
    }
    let res = []
    let stack = []
    stack.push(root)
    while (stack.length) {
        let cur = stack.pop()
        res.unshift(cur.val)
        if (cur.left) {
            stack.push(cur.left)
        }
        if (cur.right) {
            stack.push(cur.right)
        }
    }
    return res
}
// console.log(inorderTraversal(root))

// 中续遍历
function postorderTraversal(root) {
    if (!root) {
        return 
    }
    let res = []
    let stack = []
    let cur = root
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        res.push(cur.val)
        cur = cur.right
    }
    return res
}
console.log(postorderTraversal(root))

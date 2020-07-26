// 反转二叉树

// 题目描述：翻转一棵二叉树。
// 输入：
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 输出：
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

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
function inverTree(root) {
    if (!root) {
        return
    }
    let right = inverTree(root.right)
    let left = inverTree(root.left)
    root.left = right
    root.right = left
    return root
}
console.log(inverTree(root))
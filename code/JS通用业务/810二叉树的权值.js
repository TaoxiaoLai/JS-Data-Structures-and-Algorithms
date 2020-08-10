// 给定一个二叉树，给定一个权值，判断该二叉树是否存在该权值的路径

const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null 
        },
        right: {
            val: 4,
            left: null,
            right: null 
        }
    },
    right: {
        val: 5,
        right: {
            val: 6,
            left: null,
            right: null 
        }
    }
}

function judgeTree(root, sum) {
    if(root === null) {
        return false
    }
    if(root.left === null && root.right === null) {
        sum = sum - root.val
        if(sum == 0) {
            return true
        } else {
            return false
        }
    }
    judgeTree(root.left, sum)
    judgeTree(root.right, sum)
    // let leftRes, rightRes
    // leftRes = judgeTree(root.left, sum-root.val)
    // rightRes = judgeTree(root.right, sum-root.val)
    // if(root.left) {
    //     leftRes = judgeTree(root.left, sum-root.val)
    // }
    // if(root.right) {
    //     rightRes = judgeTree(root.right, sum-root.val)
    // }
    // return leftRes || rightRes
}

console.log(judgeTree(root, 6))
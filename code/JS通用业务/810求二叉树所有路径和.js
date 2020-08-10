// 实现函数接受任意二叉树，求二叉树所有根到叶子路径组成的数字之和

const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3
        },
        right: {
            val: 4
        }
    },
    right: {
        val: 5,
        right: {
            val: 6
        }
    }
}

function getPathSum(root){
    let res = 0
    if(!root) {
        return sum
    }
    function dfs(root) {
        if(!root) {
            return
        }
        res = res + root.val
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return res
}

console.log(getPathSum(root))

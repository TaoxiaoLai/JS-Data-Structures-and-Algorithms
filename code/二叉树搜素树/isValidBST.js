// 判断是否是二叉搜索树

// 题目描述：给定一个二叉树，判断其是否是一个有效的二叉搜索树。
// 假设一个二叉搜索树具有如下特征：
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

function isValidBST(root) {
    function dfs(root, minValue, maxValue) {
        if (!root) {
            return true
        }
        if (root.val <= minValue || root.val >= maxValue) return false
        return dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
    }
    return dfs(root, -Infinity, Infinity)
}


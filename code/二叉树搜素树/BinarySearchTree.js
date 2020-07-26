// 二叉搜索树及其基本操作

// 定义：
// 1、是一棵空树；
// 2、是一棵由根结点、左子树、右子树组成的树，同时左子树和右子树都是二叉搜索树，
// 且左子树上所有结点的数据域都小于等于根结点的数据域，右子树上所有结点的数据域都大于等于根结点的数据域
// 满足以上两条的任意一条就是二叉搜索树

// 基本操作：查找、插入、删除某一结点

// 查找某一结点
function search(root, n) {
    if (!root) {
        return
    }
    if (root.val === n) {
        console.log('Targht root:', root)
    } else if(root.val > n) {
        search(root.left, n)
    } else {
        search(root.right, n)
    }
}

// 插入某一结点
function insert(root, n) {
    if (!root) {
        root = new TreeNode(n)
        return
    }
    if (root.val === n) {
        return
    } else if (root.val > n) {
        insert(root.left, n)
    } else {
        insert(root.right, n)
    }
}

// 删除某个结点
function deleteTreeNode(root, n) {
    if (!root) {
        return
    }
    if (root.val === n) {
        if (!root.left && !root.right) {
            root = null
        } else if (root.left) {
            let maxLeft = findMax(root)
            root = maxLeft
            deleteTreeNode(root.left, maxLeft.val)
        } else {
            let minRight = findMin(root)
            root = minRight
            deleteTreeNode(root.right, minRight.val)
        }
    } else if (root.val > n) {
        deleteTreeNode(root.left, n)
    } else {
        deleteTreeNode(root.right, n)
    }
    function findMax(root) {
        while(root) {
            root = root.right
        }
        return root
    }
    function findMin(root) {
        while(root) {
            root = root.left
        }
        return root
    }
}
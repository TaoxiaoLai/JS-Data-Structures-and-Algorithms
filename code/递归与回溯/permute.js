// 递归——全排列

// 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。

// 示例：   
// 输入: [1,2,3]
// 输出: [
//  [1,2,3],
//  [1,3,2],
//  [2,1,3],
//  [2,3,1],
//  [3,1,2],
//  [3,2,1]
// ]

//       root
//    /   |   \
//   1    2    3
//  / \   / \
// 2   3 1   3
// |
// 3

// [1, 3, 2]

function permute(nums) {
    let len = nums.length
    let curr = []
    let res = []
    let visited = {}
    // 递归函数
    function dfs(nth) {
        // 递归边界
        if (nth === len) {
            res.push(curr.slice())
            return
        }
        // 递归式
        for(let i=0; i<len; i++) {
            if (!visited[nums[i]]) {
                // 重复操作
                curr.push(nums[i])
                visited[nums[i]] = 1
                // 递归
                dfs(nth+1)
                // 特殊处理
                curr.pop()
                visited[nums[i]] = 0
            }
        }
    }
    dfs(0)
    return res
}

console.log(permute([1,2,3]))

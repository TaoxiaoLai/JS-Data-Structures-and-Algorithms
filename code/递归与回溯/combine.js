// 回溯——限定组合问题

// 题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例: 输入: n = 4, k = 2
// 输出:
// [
//  [2,4],
//  [3,4],
//  [2,3],
//  [1,2],
//  [1,3],
//  [1,4],
// ]

function combine(n, k) {
    let res = []
    let subset = []

    dfs(1)

    function dfs(nth) {
        if (subset.length === k) {
            res.push(subset.slice())
            return
        }
        for (let i=nth; i<=n; i++) {
            subset.push(i)
            dfs(i+1)
            subset.pop()
        }
    }

    return res
}

console.log(combine(3, 2))
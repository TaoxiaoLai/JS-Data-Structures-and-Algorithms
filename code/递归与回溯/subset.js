// 递归——找子集

// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。

// 示例: 输入: nums = [1,2,3]
// 输出:
// [
//  [3],
//  [1],
//  [2],
//  [1,2,3],
//  [1,3],
//  [2,3],
//  [1,2],
//  []
// ]

function subset(nums) {
    let len = nums.length
    let res = []
    let subset = []
    dfs(0)
    function dfs(index) {
        res.push(subset.slice())
        for (let i=index; i<len; i++) {
            subset.push(nums[i])
            dfs(i+1)
            subset.pop()
        }
    }
    return res
}

function subset2(nums) {
    let len = nums.length
    let cur = []
    let res = []
    dfs(0)
    function dfs(index) {
        res.push(cur.slice())
        for (let i=index; i<len; i++) {
            cur.push(nums[i])
            dfs(i+1)
            cur.pop()
        }
    }
    return res
}
console.log(subset2([1,2,3]))
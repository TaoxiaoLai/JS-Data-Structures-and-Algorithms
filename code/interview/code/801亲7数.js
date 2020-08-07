// 给定一组数字，它们全排列组成的数能被7整除就被称为亲7数，设计一个程序，统计亲7数的个数

// 示例：
// 输入[1,2,1]
// 输出 2
// 说明：[121, 112, 211, 212, 121, 112], 能被7整除的有[112, 112], 故有两个亲7数

function relative7(nums) {
    let len = nums.length 
    let res = []
    let cur = []
    let visited = {}
    let count = 0
    function dfs(nth) {
        if(nth === len) {
            res.push(cur.join(''))
            return
        }
        for (let i=0; i<len; i++) {
            if (!visited[i]) {
                cur.push(nums[i])
                visited[i] = 1
                dfs(nth+1)
                cur.pop(nums[i])
                visited[i] = 0
            }
        }
    }
    dfs(0)
    res.forEach(item => {
        let temp = parseInt(item)
        if(temp%7 === 0) {
            count++
        }
    })
    return count
}

console.log(relative7([1,2,1]))



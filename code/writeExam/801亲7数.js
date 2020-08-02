function reletive_7( digit ) {
    const len = digit.length
    const cur = []
    const res = []
    const visited = {}
    function dfs(nth) {
        if (nth === len) {
            res.push(cur.join(''))
            return
        }
        for (let i=0; i<len; i++) {
            if (!visited[i]) {
                visited[i] = 1
                cur.push(digit[i])
                dfs(nth + 1)
                cur.pop()
                visited[i] = 0
            }
        }
    }
    dfs(0)
    let count = 0
    res.forEach(item => {
        let a = parseInt(item)
        if (a%7 === 0) {
            count++
        }
    })
    return count
}
//console.log(reletive_7([1,2,1]))
// let line = readline()
// let nums = line.split(' ')
// nums.forEach(item => {
//     parseInt(item)
// })
// print(reletive(nums))


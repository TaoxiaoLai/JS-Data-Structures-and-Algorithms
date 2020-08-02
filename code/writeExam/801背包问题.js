function a(n, T, p, value) {
    const dp = (new Array(T+1)).fill(0)
    let res = -Infinity
    for (let i=0; i<=n; i++) {
        for (let v=T; v>=p[i]; v--) {
            dp[v] = Math.max(dp[v], dp[v-p[i]] + value[i])
            if (dp[v] > res) {
                res = dp[v]
            }
        }
    }
    return res
}
// let T, n
// let p = []
// let value = []
// let count = 0
// while(line = readline()) {
//     if (count === 0) {
//         T = parseInt(line)
//     } else if (count === 1) {
//         n = parseInt(line)
//     } else {
//         let lines = line.split(' ')
//         p.push(parseInt(lines[0]))
//         value.push(parseInt(lines[1]))
//     }
//     count++
// }
// print(T)
// print(n)
// print(p)
// print(value)
// print(a(n, T, p, value))


// 100
// 5
// 77 92
// 22 22
// 29 36
// 50 46
// 99 90
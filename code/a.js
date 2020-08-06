// function sum(n) {
//     let f = []
//     f[0] = 0.0002
//     f[1] = -0.0001
//     let sum = f[0].toFixed(4)
//     if(n === 0) {
//         return sum
//     }
//     if(n === 1) {
//         return f[0] + f[1]
//     }
//     n = parseInt(n)
//     for(let i=2; i<=n; i++) {
//         if(i%2 === 0) {
//             f[i] = 1/(5*(2*i-1))
//             let temp = parseFloat(f[i]).toFixed(4)
//             console.log('1: ', temp)
//             sum = (1*sum) + (1*temp)
//         } 
//         if(i%2 === 1) {
//             f[i] = -(1/(5*2*n))
//             let temp = parseFloat(f[i]).toFixed(4)
//             console.log('2: ',temp)
//             sum = sum - temp
//         }
//     }
//     return sum.toFixed(4)
// }

// let line = read_line()
// print(sum(line))


function a(N, n1, n2) {
    let len1 = n1.length 
    let len2 = n2.length
    let dp = [new Array(len2+1).fill(0)]
    for(let i=1; i<=len1; i++) {
        dp[i] = [0]
        for(let j=1; j<=len2; j++) {
            if(n1[i-1] === n2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    let M = dp[len1][len2]
    let x = (M/N).toFixed(2)
    if (x <= 0.5) {
        return `${x} Yes`
    } else {
        return `${x} No`
    }
}

console.log(a(6, 'abcdee', 'aedcbb'))

// let M = 0
// let n1 = ''
// let n2 = ''
// let count = 0
// while(line = read_line()) {
//     lines = line.split(' ')
//     if(count === 0) {
//         M = parseInt(lines[0])
//     } else if(count === 1){
//         n1 = lines.join('')
//     } else {
//         n2 = lines.join('')
//     }
// }
// print(M, n1, n2)


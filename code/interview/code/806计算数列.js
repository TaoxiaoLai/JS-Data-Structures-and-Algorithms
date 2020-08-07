// 计算数列 f(n) = 1/5 - 1/10 + 1/15 - 1/20 + ... + 1/(5*(2*n-1)) - 1/(5*2*n), 输出结果保留四位小数

// 示例：
// 输入：1
// 输出：0.1000

function sum(n) {
    let f = []
    let sum = 0
    for(let i=1; i<=n+1; i++) {
        if(i%2 === 1) {
            f[i] = 1/(5*i)
            sum = (sum*10000+f[i]*10000)/10000      // 因为0.1+0.2 != 0.3，这是因为js中采用IEEE 754的双精度标准计算，所以先乘再除
        } else {
            f[i] = -1/(5*i)
            sum = (sum*10000+f[i]*10000)/10000
        }
    }
    return sum.toFixed(4)
}

console.log(sum(0))
console.log(sum(1))
console.log(sum(2))
console.log(sum(3))
console.log(sum(4))
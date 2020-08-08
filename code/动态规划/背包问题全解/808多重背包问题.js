// 多重背包问题

// 有n件物品和1个容量为W的背包。每种物品最多有numbers[i]件可用，第i件物品的重量为weights[i]，
// 价值为values[i]，求解将哪些物品装入背包可使价值总和最大。

// 未优化版本的多重背包问题
function multipleBack(weights, values, numbers, W) {
    let n = weights.length 
    let f = []
    f[-1] = new Array(W+1).fill(0)
    for(let i=0; i<n; i++) {
        f[i] = new Array(W+1).fill(0)
        for(let j=0; j<=W; j++) {
            let x = Math.floor(j/weights[i])
            let size = x>numbers[i]? numbers[i] : x
            for(let k=0; k<=size; k++) {
                f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]]+values[i])
            }
        }
    }
    return f[n-1][W]
}
// console.log(multipleBack([2,3,1 ],[2,3,4],[1,4,1],6))

// 优化成一维数组的解法
function improveBack1(weights, values, numbers, W) {
    let n = weights.length
    let f = new Array(W+1).fill(0)
    for(let i=0; i<n; i++) {
        for(let j=W; j>=weights[i]; j--) {
            let x = Math.floor(j/weights[i])
            let size = x>numbers[i]? numbers[i] : x
            for(let k=1; k<=size; k++) {
                f[j] = Math.max(f[j], f[j-weights[i]*k]+values[i]*k)
            }
        }
    }
    return f[W]
}
console.log(improveBack1([2,3,1 ],[2,3,4],[1,4,1],6))
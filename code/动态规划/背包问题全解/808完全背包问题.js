// 完全背包问题

// 有n件物品和1个容量为W的背包。每种物品没有上限，第i件物品的重量为weights[i]，
// 价值为values[i]，求解将哪些物品装入背包可使价值总和最大。

// 状态转移方程
// f(i, j) = max[f[i-1][j], f[i-1][j - k*weight[i]] + k*values[i]]

// 未优化的完全背包问题, 时间复杂度未O(nW(W/weights[1]+...+(W/weights[n])))
function completeBack(weights, values, W) {
    let n = weights.length 
    let f = []
    f[-1] = new Array(W+1).fill(0)
    for(let i=0; i<n; i++) {
        f[i] = new Array(W+1).fill(0)
        for(let j=0; j<=W; j++) {
            let x = Math.floor(j/weights[i])
            for(let k=0; k<=x; k++) {
                f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]*k]+values[i]*k)
            }
        }
    }
    return f[n-1][W]
}
// console.log(completeBack([3,2,2],[5,10,20], 5) )

// 优化时间复杂度为O(Wn)
function improveCompleteBack1(weights, values, W) {
    let n = weights.length
    let f = []
    f[-1] = new Array(W+1).fill(0)
    for(let i=0; i<n; i++) {
        f[i] = new Array(W+1).fill(0)
        for(let j=0; j<=W; j++) {
            if(j < weights[i]) {
                f[i][j] = f[i-1][j]
            } else {
                f[i][j] = Math.max(f[i-1][j], f[i][j-weights[i]]+values[i])
            }
        }
    }
    return f[n-1][W]
}
// console.log('1: ', improveCompleteBack1([3,2,2],[5,10,20], 5))

// 优化成一维数组的背包问题
function improveCompleteBack2(weights, values, W) {
    let n = weights.length
    let f = new Array(W+1).fill(0)
    for(let i=0; i<n; i++) {
        for(let j=W; j>=weights[i]; j--) {
            let x = Math.floor(j/weights[i])
            for(let k=x; k>=1; k--) {
                f[j] = Math.max(f[j], f[j-weights[i]*k]+values[i]*k)
            }
        }
    }
    return f[W]
}
// console.log('2: ', improveCompleteBack2([3,2,2],[5,10,20], 5))

// 优化成一维数组且时间复杂度为O(nW)
// 注意内层循环这里要正序，且是从weight[i]开始
function improveCompleteBack3(weights, values, W) {
    let n = weights.length
    let f = new Array(W+1).fill(0)
    for(let i=0; i<n; i++) {
        for(let j=weights[i]; j<=W; j++) {
            f[j] = Math.max(f[j], f[j-weights[i]]+values[i])
        }
    }
    return f[W]
}
console.log('3: ', improveCompleteBack3([3,2,2],[5,10,20], 5))
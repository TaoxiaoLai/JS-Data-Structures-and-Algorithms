// 01背包问题
// 有n件物品和1个容量为W的背包。每种物品均只有一件，第i件物品的重量为w[i], 价值为v[i]，求解将哪些物品装入背包可使价值总和最大。
// 对于一种物品，要么装入背包，要么不装。所以对于一种物品的装入状态只是1或0, 此问题称为01背包问题。

// 状态转移方程
// f(i, j) i表示有0到i件物品可以选，j表示背包的容量(0~j)，f(i, j)表示能得到的最大价值
// 初步分析的状态转移方程
// f(i, j) = 0                                      j<w[0]  && i=0
// f(i, j) = v[0]                                   j>=w[0] && i=0
// f(i, j) = f(i-1, j)                              j<w[i]  && i>0
// f(i, j) = max[f(i-1, j), f(i-1, j-w[i])+v[i]]    j>=w[i] && i>0

function baseSack(weights, values, W) {
    let n = weights.length
    let f = [[]]
    for(let j=0; j<=W; j++) {
        if(j<weights[0]) {
            f[0][j] = 0
        } else {
            f[0][j] = values[0]
        }
    } 
    for(let j=0; j<=W; j++) {
        for(let i=1; i<n; i++) {
            if(!f[i]) {     //创建新的一行
                f[i] = []
            }
            if(j<weights[i]) {
                f[i][j] = f[i-1][j]
            } else {
                f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]]+values[i])
            }
        }
    }
    return f[n-1][W]
}
// console.log('01背包: ', improveBack2([2,2,6,5,4],[6,3,5,4,6], 5))

// 优化1：合并循环
function improveBack1(weights, values, W) {
    let n = weights.length
    let f = new Array(n)
    for(let i=0; i<n; i++) {
        f[i] = []
    }
    for(let i=0; i<n; i++) {
        for(let j=0; j<=W; j++) {
            if(i === 0) {
                f[0][j] = j<weights[0]? 0 : values[0]
                // 其实本质如下
                // f[i][j] = j<weights[i]? 0 : values[i]
                // 所以设置一个负1行，让其都等于0，则就可以和下面的两个状态转移方程合并
            } else {
                if(j<weights[i]) {
                    f[i][j] = f[i-1][j]
                } else {
                    f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]]+values[i])
                }
            }
        }
    }
    return f[n-1][W]
}

// 优化2：加一个-1行，其全是0，这样就不用单独处理i=0时的情况
function improveBack2(weights, values, W) {
    let n = weights.length
    let f = new Array(n)
    f[-1] = new Array(W+1).fill(0)     // 注意此处是W+1，因为是从0开始的，所以的加1
    for(let i=0; i<n; i++) {
        f[i] = []   // 这一步其实是合并上面的那个for循环里面填f[i] = []
        for(let j=0; j<=W; j++) {
            if(j<weights[i]) {
                f[i][j] = f[i-1][j]
            } else {
                f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]]+values[i])
            }
        }
    }
    return f[n-1][W]
}

// 打印出所选物品
function backChose(weights, values, W) {
    let n = weights.length
    let f = []
    f[-1] = new Array(W+1).fill(0)
    for(let i=0; i<n; i++) {
        f[i] = []
        for(let j=0; j<=W; j++) {
            if(j < weights[i]) {
                f[i][j] = f[i-1][j]
            } else {
                f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]]+values[i])
            }
        }
    }
    j = W
    let w = 0   // 当前所选物品的重量
    let chose = []      // 当前已选的物品
    for(let i=n-1; i>=0; i--) {
        if(f[i][j] > f[i-1][j]) {
            chose.push(i)
            w += weights[i]
            j = j - weights[i]
        }
    }
    return [f[n-1][W], chose.reverse(), w]
}

// console.log('01背包选择: ', backChose([2,2,6,5,4],[6,3,5,4,6], 5))

// 使用滚动数组优化，因为当前的状态只和它前面一行的状态有关，因此不需要一个二维数组，只需要两个数组然后滚动变化就可以
function improveBack3(weights, values, W) {
    let n = weights.length
    let f = [new Array(W+1).fill(0), []]
    let now = 1, last
    for(let i=0; i<n; i++) {
        for(let j=0; j<=W; j++) {
            if(j < weights[i]) {
                f[now][j] = f[1-now][j]
            } else {
                f[now][j] = Math.max(f[1-now][j], f[1-now][j-weights[i]]+values[i])
            }
        }
        last = f[now]
        now = 1-now
    }
    return last[W]
}
// console.log('01背包选择: ', improveBack3([2,2,6,5,4],[6,3,5,4,6], 5))

// 优化成一维数组（未很理解，记住要点，内层循环倒序，到j>=weights[i]为止）
function improveBack4(weights, values, W) {
    let n = weights.length
    let f = new Array(W+1).fill(0)  // 注意这边要全部填0
    for(let i=0; i<n; i++) {
        for(let j=W; j>=weights[i]; j--) {
            f[j] = Math.max(f[j], f[j-weights[i]]+values[i])
        }
    }
    return f[W]
}
console.log('01背包选择: ', improveBack4([2,2,6,5,4],[6,3,5,4,6], 5))
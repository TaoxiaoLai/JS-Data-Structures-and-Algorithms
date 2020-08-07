// “最值”型问题：找硬币
// 题目描述：给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
// 如果没有任何一种硬币组合能组成总金额，返回 -1。
// 示例：
// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3
// 解释: 11 = 5 + 5 + 1

function coinChange(coins, amount) {
    let f = []
    f[0] = 0
    for (let i=1; i<=amount; i++) {
        f[i] = Infinity
        for (let j=0; j<coins.length; j++) {
            if (i-coins[j] >= 0) {
                f[i] = Math.min(f[i], f[i-coins[j]]+1)
            }
        }
    }
    if(f[amount] === Infinity) {
        return -1
    }
    return f[amount]
}
console.log(coinChange807([1,2,3,5], 11))

function coinChange806(coins, amount) {
    let f = []
    f[0] = 0
    for (let i=1; i<=amount; i++) {
        f[i] = Infinity     // 注意这里设为无穷大
        for (let j=0; j<coins.length; j++) {
            if (i - coins[j] >= 0) {        // 注意要进行这步判断
                f[i] = Math.min(f[i], f[i-coins[j]]+1)
            }
        }
    }
    if (f[amount] === Infinity) {
        return -1
    }
    return f[amount]
}

function coinChange807(coins, amount) {
    let f = []
    f[0] = 0
    for(let i=1; i<=amount; i++) {
        f[i] = Infinity
        for(let j=0; j<coins.length; j++) {
            if (coins[j] <= i) {
                f[i] = Math.min(f[i], f[i-coins[j]]+1)     // 状态方程要写对
            }
        }
    }
    if (f[amount] === Infinity) {
        return -1
    }
    return f[amount]
}

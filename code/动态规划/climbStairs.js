// 动态规划————爬楼梯问题
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 示例：
// 输入：3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1 阶 + 1 阶 + 1 阶
// 1 阶 + 2 阶
// 2 阶 + 1 阶

// 直接递归解法
function climbStairs1(n) {
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    return climbStairs(n-1) + climbStairs(n-2)
}
// console.log(climbStairs1(10))

// 记忆化搜索优化
function climbStairs2(n) {
    let f = []
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    if (f[n] === undefined) f[n] = climbStairs2(n-1) + climbStairs2(n-2)
    return f[n]
}
// console.log(climbStairs2(20))

// 动态规划优化
function climbStairs3(n) {
    let f = []
    f[1] = 1
    f[2] = 2
    for (let i=3; i<=n; i++) {
        f[i] = f[i-2] + f[i-1] 
    }
    return f[n]
}
console.log(climbStairs806(3))

function climbStairs806(n) {
    let f = []
    f[1] = 1
    f[2] = 2
    for (let i=3; i<=n; i++) {
        f[i] = f[i-1] + f[i-2]
    }
    return f[n]
}
// 斐波那契数列：1，1，2，3，5，8，13......


// f(3) = f(2) + f(1) = 2 + 1
// f(2) = f(1) + f(0) = 2
// 递归解法
function fib1(n) {
    if(n==0 || n==1) {
        return 1
    }
    return fib1(n-1) + fib1(n-2)
}
console.log('递归：', fib1(3))



// 状态转移方程
// f(n) = f(n-1) + f(n-2)
// f(0) = 1 f(1) = 1

// [1, 1, 2]
// 动态规划解法
function fib2(n) {
    let res = []
    res[0] = 1
    res[1] = 1
    for (let i=2; i<=n; i++) {
        res[i] = res[i-1] + res[i-2]
    }
    return res
}
console.log('动态规划：', fib2(3))


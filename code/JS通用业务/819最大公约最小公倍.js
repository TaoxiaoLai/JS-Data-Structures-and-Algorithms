// 求两个数的最大公约数？

function getMax(a, b) {
    if(b===0) return a
    return getMax(b, a%b)
}

// 求最小公倍数

function getMin(a, b) {
    return a*b / getMax(a, b)
}

console.log(getMin(6, 8))
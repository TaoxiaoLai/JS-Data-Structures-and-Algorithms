// 如何求数组的最大值和最小值？

let arr = [6, 4, 1, 8, 2, 11, 23]
let max = Math.max.apply(null, arr)
let min = Math.min.apply(null, arr)

console.log(max, min)
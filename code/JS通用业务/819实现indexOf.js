// 实现indexOf方法

function myIndexOf(arr, val) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === val) {
            return i
        }
    }
    return -1
}

function rever(str) {
    let arr = str.split('')
    let i = 0
    let j = arr.length - 1
    while(i < j) {
        if(arr[i] !== arr[j]) {
            return false
        }
        i++
        j--
    }
    return true
}
console.log(rever('abcba'))
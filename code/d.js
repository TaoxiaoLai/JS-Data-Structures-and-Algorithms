// 斗鱼

let str = 'abcddadcfsa'

// 去重
function a(str) {
    let arr1 = str.split('')
    let set = new Set(arr1)
    let arr2 = Array.from(set)
    return arr2.join('')
}
console.log(b(str))

// 隔三插逗号
function b(str) {
    let arr = str.split('')
    let count = 2
    for(let i=0; i<arr.length; i++) {
        if(count === 2) {
            count = 0
            arr.splice(i, 0, ',')
            i++
        } else {
            count = count + 1
            continue
        }
    }
    arr.shift()
    return arr.join('')
}

// 装雨水
function c(height) {
    let left = 0
    let right = height.length - 1
    let res = 0
    let leftMax = 0
    let rightMax = 0
    while(left < right) {
        let i = height[left]
        let j = height[right]
        if(i<j) {
            leftMax = Math.max(i, leftMax)
            res += leftMax - i
            left++
        } else {
            rightMax = Math.max(j, rightMax)
            res += rightMax - j
            right--
        }
    }
    return res
}

// 过滤html标签
function d(str) {
    let s = str.replace(/<\/?[^>]*/g, '')
    // s = str.replace(/[|]*\n/, '')
    return s
}
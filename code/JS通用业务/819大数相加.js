// js 实现一个函数，完成超过范围的两个大整数相加功能

function bigNumAdd(num1, num2) {
    let arr1 = num1.split('')
    let arr2 = num2.split('')
    // carry控制进位
    let carry = false
    // 保存结果
    let result = ''
    while(arr1.length || arr2.length || carry) {
        // ~按位取反，1 => -1, ~~取反再取反转化为数字，undefined会变为0
        carry += ~~arr1.pop() + ~~arr2.pop()
        result = carry%10 + result
        carry = carry > 9
    }
    return result
}

// console.log(bigNumAdd('10000000009', '90000000009'))




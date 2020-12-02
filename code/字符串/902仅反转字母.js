// 给定一个字符串，仅反转里面的字母

function reverseOnlyLetters(str) {
    let reg = /[a-zA-Z]/
    let arr = str.split('')
    let i = 0, j = arr.length - 1
    while(i < j) {
        if(!reg.test(arr[i])) {
            i++
        }
        if(!reg.test(arr[j])) {
            j--
        }
        if(reg.test(arr[i]) && reg.test(arr[j])) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        }
    }
    return arr.join('')
}
console.log(reverseOnlyLetters('ab-cde*fghi+jklm/n'))
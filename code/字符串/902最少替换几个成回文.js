// 给定一个字符串，问最少替换多少个字符能成为回文串

function deleteNum(len, str) {
    let mid = Math.floor(len/2)
    let str1 = str.slice(0, mid)
    let str2 = len%2 == 0? str.slice(mid) : str.slice(mid + 1)
    let arr1 = str1.split('')
    let arr2 = str2.split('').reverse()
    let count = 0
    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] == arr2[i]){
            continue
        } else {
            count++
        }
    }
    return count
}

console.log(deleteNum(8, 'abcdbaba'))
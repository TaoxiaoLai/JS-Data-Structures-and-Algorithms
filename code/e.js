// b站

// 版本号排序
function a(arr) {
    function sort(str1, str2) {
        let arr1 = str1.split('.')
        let arr2 = str2.split('.')
        let len = arr1.length>arr2.length? arr2.length : arr1.length
        for(let i=0; i<len; i++) {
            if(arr1[i] == arr2[i]) continue
            if(parseInt(arr1[i]) < parseInt(arr2[i])) {
                return str2
            } else {
                return str1
            }
        }
        return arr1.length>arr2.length? str1 : str2
    }
    for (let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length-1; j++) {
            if(sort(arr[j], arr[j+1]) === arr[j]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
let arr = ["2.1.0", "1.5", "2", "1.1.999.1.2.3", "0.10.0"]
// console.log(a(arr))

// 转8进制
function b(num) {
    let eight = num.toString(8)
    let arr = eight.split('')
    let count = 0
    arr.forEach(element => {
        if(element == 7) {
            count++
        }
    })
    return count
}

let num = 13
//console.log(b(num))

// 完全平方数
function c(n) {
    let dp = new Array(n+1).fill(0)
    for(let i=1; i<=n; i++) {
        dp[i] = i;
        for(let j=1; j*j<=i; j++) {
            dp[i] = Math.min(dp[i], dp[i-j*j]+1)
        }
    }
    return dp[n]
}
console.log(c(num))
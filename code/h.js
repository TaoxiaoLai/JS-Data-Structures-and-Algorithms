// 分数的四则运算

// function a(arr) {
//     let num1 = arr[0].split('/')
//     let num2 = arr[2].split('/')
//     let type = arr[1]
//     let res = []
//     if(type == '/') {
//         [num2[0], num2[1]] = [num2[1], num2[0]]
//     }
//     if(num1[1] !== num2[1]) {
//         let tempMinBei = num1[1] > num2[1]? minBei(parseInt(num1[1]), parseInt(num2[1])) : minBei(parseInt(num2[1]), parseInt(num1[1]))
//         num1[0] = num1[0] * (tempMinBei / num1[1])
//         num2[0] = num2[0] * (tempMinBei / num2[1])
//         num1[1] = tempMinBei
//         num2[1] = tempMinBei
//     }
//     if(type == '+') {
//         res[0] = parseInt(num1[0]) + parseInt(num2[0])
//         res[1] = parseInt(num1[1])
//     }
//     if(type == '-') {
//         res[0] = parseInt(num1[0]) - parseInt(num2[0])
//         res[1] = parseInt(num1[1])
//     }
//     if(type == '*' || type == '/') {
//         res[0] = parseInt(num1[0]) * parseInt(num2[0])
//         res[1] = parseInt(num1[1]) * parseInt(num2[1])
//     }
//     let tempMaxSame = maxSame(res[1], res[0])
//     res[0] = res[0]>0? res[0] / tempMaxSame : res[0] / (-tempMaxSame)
//     res[1] = res[0]>0? res[1] / tempMaxSame : res[1] / (-tempMaxSame)
//     return  res.join('/')

//     function maxSame(a, b) {
//         if(b===0) return a
//         return maxSame(b, a%b)
//     }
//     function minBei(a, b) {
//         return a*b / maxSame(a, b)
//     }
// }

// console.log(a(['1/4', '-', '1/2']))

function a(arr) {
    let len = arr.length
    let s = []
    let x = 0
    for(let i=0; Math.pow(2, i)<=len; i++) {
        s[i] = arr.splice(0, Math.pow(2, i))
    }
    let res = []
    for(let i=0; i<s.length; i++) {
        res.push(s[i].shift())
    }
    for(let i=s.length-1; i>0; i--) {
        res = res.concat(s[i])
    }
    return res
}

console.log(a([1,2,3,4,5,6,7,8,9,10,11]))

//console.log(Math.pow(2,3))
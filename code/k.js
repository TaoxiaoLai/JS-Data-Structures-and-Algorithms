// async
// defer

// expries
// null undefined Boolean String Number Symbol

// var d;
// console.log(d);
// d = 7;
// console.log(d);
// var d = function() {  
// console.log(8);
// }
// d();
// console.log(d);

// 输出[1,2,3,4]的所有排列组合

function a(arr) {
    let len = arr.length 
    let cur = []
    let res = []
    let visited = {}
    function dfs(nth) {
        if(nth === len) {
            res.push(cur.slice())
            return
        }
        for(let i=0; i<len; i++) {
            if(!visited[arr[i]]) {
                cur.push(arr[i])
                visited[arr[i]] = true
                dfs(nth+1)
                cur.pop()
                visited[arr[i]] = 0
            }
        }
    }
    dfs(0)
    return res
}

console.log(a([2,2,3]))

// 实现两个大数相减

function b(num1, num2) {
    let res = '', c = 0
    let n1 = num1.split('')
    let n2 = num2.split('')
    while(n1.length) {
        let i = 1*n1.pop()
        let j = 1*n2.pop()
        if(i >= j) {
            c = i - j - c
            res = c + res
            c = 0
        } else {
            c = i + 10 - j - c
            res = c + res
            c = 1
        }
    }
    if(res === '') {
        return 0
    }
    return parseInt(res)
}

// console.log(b('9876543210', '1234567890'))

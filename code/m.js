function subset(nums) {
    let len = nums.length
    let res = []
    let subset = []
    dfs(0)
    function dfs(index) {
        res.push(subset.slice())
        for (let i=index; i<len; i++) {
            subset.push(nums[i])
            dfs(i+1)
            subset.pop()
        }
    }
    let sum = []
    res.forEach(item => {
        if(item.length !== 0) {
            let x = item.reduce(function(pre, cur) {
                return pre+cur
            })
            if(x%7 === 0) {
                if(sum.length === 0 || sum[0] < x) {
                    sum[0] = x
                }
            }
        } 
    })
    if(sum.length === 0) {
        return -1
    } else {
        return sum[0]
    }
}

// let arr = [10, 20, 2, 29]
// console.log(subset(arr))

function b(str) {
    let map = {
        0: 0
    }
    let max = 0
    let status = 0
    for(let i=0; i<str.length; i++) {
        if(str[i] == 'a') {
            status ^= (1 << 0)
        } else if(str[i] == 'b') {
            status ^= (1 << 1)
        } else if(str[i] == 'c') {
            status ^= (1 << 2)
        } else if(str[i] == 'x') {
            status ^= (1 << 3)
        } else if(str[i] == 'y') {
            status ^= (1 << 4)
        } else if(str[i] == 'z') {
            status ^= (1 << 5)
        }
        if(map[status] != undefined) {
            max = Math.max(max, i+1-map[status])
        } else {
            map[status] = i+1
        }
    }
    return max
}
let str = 'amabc'
// console.log(b(str))


function a(n) {
    return Math.floor(Math.random() * n)
}

// console.log(a(9))

function c(str) {
    let len = str.length
    let res = 0
    let dp = new Array(len)
    for(let i=0; i<len; i++) {
        for(let j=0; j<=i; j++) {
            if(str[j] == str[i] && (i-j <= 1 || dp[j+1])) {
                dp[j] = true
                res++
            } else {
                dp[j] = false
            }
        }
    }
    return res - len
}

let s = 'a'
// console.log(c(s))

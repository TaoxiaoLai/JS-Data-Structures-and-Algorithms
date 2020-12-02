// 组成的Good数

function a(str) {
    let strArr = str.match(/[a-zA-Z]/g)
    let count = 0
    function dfs(arr, num) {
        let GIndex = arr.indexOf('G')
        
    }
    return dfs(strArr, count)
}

let str = '123 GoodoodGGoooddjfhjdGGooo3dkdggggGoood0123\n'
console.log(a(str))


// 区间不重叠
function b(arr) {
    if(arr.length === 0) {
        return 0
    }
    let res = 0
    let cur = []
    arr.sort((a, b) => {
        return a[1] - b[1]
    })
    if(arr[0].length === 2) {
        res = 1
        cur = arr[0]
    }
    for(let i=1; i<arr.length; i++) {
        if(arr[i][0] >= cur[1]) {
            res = res + 1
            cur = arr[i]
        }
    }
    return arr.length - res
}

// console.log(b([ [1,2], [2,3], [3,4], [1,3] ]))

// 最长上升路径
function c(arr) {
    let row = arr.length
    let col = arr[0]? arr[0].length : 0
    let res = 0
    let dp = Array.from({length: row}, () => Array(col).fill(0))
    if(row === 0 || col === 0) {
        return res
    }
    for(let i=0; i<row; i++) {
        for(let j=0; j<col; j++) {
            res = Math.max(res, dfs(i, j))
        }
    }
    function dfs(r, c) {
        if(dp[r][c]) {
            return dp[r][c]
        }
        dp[r][c] = 1
        if(c-1 >= 0 && arr[r][c-1] > arr[r][c]) {
            dp[r][c] = Math.max(dp[r][c], dfs(r, c-1)+1)
        }
        if(c+1 < col && arr[r][c+1] > arr[r][c]) {
            dp[r][c] = Math.max(dp[r][c], dfs(r, c+1)+1)
        }
        if(r-1 >= 0 && arr[r-1][c] > arr[r][c]) {
            dp[r][c] = Math.max(dp[r][c], dfs(r-1, c)+1)
        }
        if(r+1 < row && arr[r+1][c] > arr[r][c]) {
            dp[r][c] = Math.max(dp[r][c], dfs(r+1, c)+1)
        }
        return dp[r][c]
    }
    return res
}

console.log(c([[9,1,4], [6,2,8],[5,5,7]]))



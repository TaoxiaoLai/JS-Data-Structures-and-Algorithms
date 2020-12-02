function a(arr) {
    let left = arr.shift()
    let right = arr.pop()
    if(left != '(' || right != ')') {
        return 'invalid'
    }
    let type = arr.shift()
    if(type == '+') {
        return ( (parseInt(arr[0]) + parseInt(arr[1]) )%10000000 + 10000000)%10000000
    } else if(type == '-') {
        return ((parseInt(arr[0]) - parseInt(arr[1]))%10000000 + 10000000)%10000000
    } else if(type == '*') {
        return ((parseInt(arr[0]) * parseInt(arr[1]))%10000000 + 10000000)%10000000
    } else if (type == '/') {
        return ((parseInt(arr[0]) / parseInt(arr[1]))%10000000 + 10000000)%10000000
    } else {
        return 'invalid'
    }
}

let arr = ['(', '+', '20', '2', ')']
//console.log(a(arr))


function b(arr, n, m) {
    let i = 0
    let x = 0
    while(i<n/2) {
        let flag = true
        for(let j=0; j<m; j++) {
            if(arr[i][j] == arr[n-i-1][j]) {
                continue
            } else {
                flag = false
            }
        }
        if(flag == false) {
            x = n
            break
        } else {
            i++
        }
    }
    if(x != n) {
        x = b(arr.slice(0, n/2), n/2, m)
    }
    return x
}

let arr1 = [[1,2,1],[2,1,2],[2,1,2],[1,2,1]]


function c(n, m, k, arr) {
    let count = 0
    for(let i=0; i<=n-m; i++) {
        let flag = true
        for(let j=i; j<i+m; j++) {
            if(arr[j] >= k) {
                continue
            } else {
                console.log(flag)
                break
            }
        }
        if(flag) {
            count++
        }
    }
    return count
}
console.log(c(8,2,5,[5, 4, 4, 4, 4, 4, 5, 5]))

function random() {
    let x = Math.floor(Math.random() * 1000000)
    let y = x%2
    if(y == 0) {
        return 'Yes'
    } else {
        return 'No'
    }
}
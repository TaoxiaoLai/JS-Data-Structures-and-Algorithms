// 01背包变形 玩游戏成就值最大

function a(X, A, B) {
    let len = A.length
    let f = new Array(X+1).fill(0)
    for(let i=0; i<len; i++) {
        for(let j=X; j>=B[i]; j--) {
            f[j] = Math.max(f[j], f[j-B[i]]+A[i])
        }
    }
    return f[X]
}
// let X1 = 2, A1 = [10, 20], B1 = [1, 2]
// console.log(a(X1, A1, B1))

// let X2 = 4, A2 = [10, 18, 10], B2 = [2, 3, 2]
// console.log(a(X2, A2, B2))

// let X, A, B
// let count = 0
// while(line = read_line()) {
//     if(count == 0) {
//         count = 1
//         let lines = line.split(' ')
//         X = parseInt(lines[1])
//     } else {
//         let lines = line.split(' ')
//         A.push(parseInt(lines[0]))
//         B.push(parseInt(lines[1]))
//     }
// } 
// print(a(X, A, B))

// 贪心算法删数字得最小值
function b(s, k) {
    let arrStr = s.split('')
    let x = 0
    while(x<k) {
        for(let i=0; i<arrStr.length-1; i++) {
            if(arrStr[i] > arrStr[i+1]) {
                arrStr.splice(i, 1)
                x++
                break
            }
            if(i==arrStr.length-2) {
                arrStr.pop()
                x++
            }
        }
    }
    return arrStr.join('')
}

// let s = '16485679'
// let k = 4
// console.log(b2(s, k))
//b2(s, k)

// let s = read_line()
// let k = read_line()
// print(b(s, k))

function b2(s, k) {
    let x = 0
    while(x<k) {
        for(let i=0; i<s.length-1; i++) {
            if(s.charAt(i) > s.charAt(i+1)) {
                s = s.replace(s.charAt(i), '')
                x++
                break
            }
            if(i==s.length-2) {
                s = s.replace(s.charAt(s.length-1), '')
                x++
            }
        }
    }
    return s
}



//Function.prototype.a = function() { console.log('Fun_prototype: a()') }
Object.prototype.a = function() { console.log('Obj_prototype: a()') }

Object.a()

console.log(Object.a === Object.prototype.a)
console.log(Object.a === Object.__proto__.a)

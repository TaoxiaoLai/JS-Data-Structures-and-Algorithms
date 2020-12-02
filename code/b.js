function change(len, str) {
    let midle = Math.floor(len/2)
    let str1 = str.slice(0, midle)
    let str2
    len%2 === 0? str2=str.slice(midle) : str2=str.slice(midle+1)
    let arr1 = str1.split('')
    let arr2 = str2.split('').reverse()
    let count = 0
    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] == arr2[i]) {
            continue
        } else {
            count++
        }
    }
    return count
}

console.log(change(7, 'abccbba'))

function colorCount(n, m) {
    if (n == m == 1) {
        return 1
    }
    if (n%2 == 0 || m%2 == 0) {
        return 2
    }
    if (n == m == 3) {
        return 3
    }
    return 4
}

// let count=0
// while(line = readline()) {
//     if(count = 0) {
//         count = 1
//         continue
//     }
//     lines = line.split(' ')
//     let n = parseInt(lines[0])
//     let m = parseInt(lines[1])
//     print(colorCount(n, m))
// }

function pathNum(n, m) {
    function find(i, j) {
        if(i<0 || i>=n-1 || j<0 || j>=m-1) {
            return 1
        }
        let key = `${i}-${j}`
        if (visited.has(key)) {
            return visited.get(key)
        }
        let res = 0
        for(let k=0; k<3; k++) {
            res = (res + find(i + direction[k][0], j+direction[k][1])) % mod
        }
        visited.set(key, res)
        return res
    }
    
    let visited = new Map()
    const direction = [[1,0], [0, -1], [0, 1]]
    let mod = Math.pow(10, 9) + 7
    return find(0, 0)
}
 
// console.log(pathNum(2,2))
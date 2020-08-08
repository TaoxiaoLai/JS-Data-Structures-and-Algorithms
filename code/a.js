// let count = 0
// let total = 0
// let visited = {}
// while(line = readline()) {
//     if (count === 0) {
//         total = parseInt(line[0])
//     } else {
//         if(!visited[line[0]]) {
//             visited[line[0]] = 1
//         } else {
//             visited[line[0]] = visited[line[0]]*1 + 1
//         }
//     }
//     count = 1
// }
// let keywordNum = 0
// for(let key in visited) {
//     let a = parseInt(visited[key])
//     if((a/total)*100 >= 1) {
//         keywordNum++
//     }
// }
// print(keywordNum)

function func(n) {
    let f = []
    f[1] = 1
    f[2] = 2
    f[3] = 4
    if(n <= 3) {
        return f[n]
    } else {
        for(let i=4; i<=n; i++) {
            f[i] = f[i-1] + 2*f[i-2] - f[i-3]
        }
    }
    return f[n]%10007
}

console.log(func(5))

// let count = 0
// while(line = readline()) {
//     if(count === 0) {
//         count = 1
//     } else {
//         let n = parseInt(line[0])
//         print(func(n))
//     }
// }

let count = 0
let visited = {}
while(line = readline()) {
    if (count === 0) {
        count = 1
    } else {
        lines = line.split(' ')
        visited[lines[0]] = lines[1]
    }
}

for(let i in visited) {
    for(let j in visited) {
        if(i == visited[j]) {
            visited[j] = visited[i]
        }
    }
}

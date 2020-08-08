// 找关键词

// 输入一段英文，统计每个英文出现的频率，当其出现频率大于等于1%时，可以当作关键词，统计可以当关键词的单词个数

// 输入：
// 5      // 总单词个数
// I
// I
// am
// a
// boy

// 输出：
// 4

// 说明：I出现频率40%，其他都是20%，故有四个单词可以做关键词

function countKeyword(n, str) {
    let arr = str.split(' ')
    let visited = {}
    let count = 0
    for(let i=0; i<arr.length; i++) {
        if(!visited[arr[i]]) {
            visited[arr[i]] = 1
        } else {
            visited[arr[i]] += 1
        }
    }
    for(let key in visited) {
        let a = visited[key]
        if((a/n)*100 >= 1) {
            count++
        }
    }
    return count
}

console.log(countKeyword(5, 'I I am a boy'))
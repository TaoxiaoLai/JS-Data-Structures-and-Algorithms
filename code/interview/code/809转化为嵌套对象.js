// 输入：
let arr = [
    {
        id: 2,
        parent: 1
    },{
        id: 1,
        parent: null
    },{
        id: 3,
        parent: 2
    }
]

// 输出：
let obj = {
    obj: {
        id: 1,
        parent: null,
        child: {
            id: 2,
            parent: 1,
            child: {
                id: 3,
                parent: 2
            }
        }
    }
}

function transformArr(arr) {
    let len = arr.length
    let obj = {}
    let visited = {}
    for(let i=0; i<len; i++) {
        if(visited[arr[i].id] == 1) {
            continue
        }
        if(arr[i].parent === null) {
            obj = arr[i]
            visited[arr[i].id] = 1
        } else {
            let x = arr[i].parent
            arr[x].child = arr[i]
            obj = arr[x]
            visited[arr[i].id] = 1
            visited[arr[x].id] = 1
        }
    }
    return obj
}
console.log(transformArr(arr))
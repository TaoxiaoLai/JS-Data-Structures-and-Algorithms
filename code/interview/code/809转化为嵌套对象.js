// 输入：
let arr = [
    {
        id: 'b',
        parent: 'a'
    },{
        id: 'a',
        parent: null
    },{
        id: 'c',
        parent: 'b'
    }
]
// console.log(arr[0]['id'])
// console.log(arr[0].id)

// 输出：
let obj = {
    obj: {
        id: 'a',
        parent: null,
        child: {
            id: 'b',
            parent: 'a',
            child: {
                id: 'c',
                parent: 'b'
            }
        }
    }
}

function transformArr(arr) {
    let len = arr.length
    let idObj = {}
    let resObj = {}
    for(let i=0; i<len; i++) {
        idObj[arr[i].id] = arr[i]
    }
    for(let key in idObj) {
        if(idObj[key].parent === null) {
            resObj = {
                obj: idObj[key]
            }
            continue
        } else {
            let parentKey = idObj[key].parent
            idObj[parentKey].child = idObj[key]
        }
    }
    return resObj
}
console.log(transformArr(arr))
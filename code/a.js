function a(arr) {
    let len = arr.length 
    for (let i=0; i<len; i++) {
        let x = Math.floor(Math.random() * (len - 1))
        let temp = arr[i]
        arr[i] = arr[x]
        arr[x] = temp
    }
    return arr
}

// console.log(a([1,2,3,4,5,6,7,8,9]))

function obj(arr) {
    let len = arr.length
    let obj = {}
    function sort(obj1, obj2) {
        if(obj1.id < obj2.id) {
            return obj1
        } else {
            return obj2
        }
    }
    for(let i=0; i<len; i++) {
        for(let j=0; j<len-1; j++) {
            if(sort(arr[j], arr[j+1]) == arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    obj = arr[0]
    let i = 1
    function a(mainObj,tempObj) {
        if (!tempObj) {
            return
        }
        mainObj.child = tempObj
        a(tempObj, arr[i++])
    }
    a(obj, arr[i])
    return obj
}

console.log(obj[{id:1}, {id:2}, {id:3}])
// 数组去重

var arr = [1, 1, '1', '1', 1, '1']
console.log(unique3(arr))

// 双重循环
function unique1(arr) {
    for(let i=0; i<arr.length-1; i++) {
        for(let j=1; j<arr.length; j++) {
            if(arr[i] === arr[j]) {
                arr.splice(j, 1)
            } else {
                continue
            }
        }
    }
    return arr
}

// indexOf方法
function unique2(arr) {
    let res = []
    for(let i=0; i<arr.length; i++) {
        if(res.indexOf(arr[i]) == -1) {
            res.push(arr[i])
        }
    }
    return res
}

// set方法
function unique3(arr) {
    let set = new Set(arr)
    return Array.from(set)
}
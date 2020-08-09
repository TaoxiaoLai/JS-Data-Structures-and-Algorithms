// 输入一个数组，将其乱序
function a(arr) {
    let len = arr.length 
    for (let i=0; i<len; i++) {
        let x = Math.floor(Math.random() * (len - 1))   // 注意此处要向下取整
        let temp = arr[i]
        arr[i] = arr[x]
        arr[x] = temp
    }
    return arr
}

console.log(a([1,2,3,4,5,6,7,8,9,10]))
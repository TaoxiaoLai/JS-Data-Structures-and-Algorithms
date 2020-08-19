// 2. js 如何实现数组扁平化？

// 数组的扁平化，就是将一个嵌套多层的数组 array (嵌套可以是任何层数)转换为只有一层的数组。
// 举个例子，假设有个名为 flatten 的函数可以做到数组扁平化，效果就会如下：

var arr = [1, [2, [3, 4]]];
console.log(flatten3(arr)) // [1, 2, 3, 4]

// 递归
function flatten1(arr) {
    let result = []
    for(let i=0, len=arr.length; i<len; i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flatten1(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

// 使用reduce方法
function flatten2(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur)? flatten2(cur) : cur)
    }, [])
}

// 使用ES6中的展开运算符
function flatten3(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
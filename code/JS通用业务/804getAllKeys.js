// 请写一个函数，输出出多级嵌套结构的 Object 的所有 key 值

let obj = {
    a: "12",
    b: "23",
    first: {
        c: "34",
        d: "45",
        second: { 3: "56", f: "67", three: { g: "78", h: "89", i: "90" } },
    },
}

function getAllKeys(obj, keyArr=[]) {
    for (let key in obj) {
        keyArr.push(key)
        if (obj[key] instanceof Object === true) {
            getAllKeys(obj[key], keyArr)
        }
    }
    return keyArr
}

console.log(getAllKeys(obj))
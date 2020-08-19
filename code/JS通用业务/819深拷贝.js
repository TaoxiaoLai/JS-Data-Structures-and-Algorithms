// 实现对象的深拷贝

let obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: 4,
            g: 5
        }
    }
}

function deepCopy(obj) {
    let newObj = {}
    for(let key in obj) {
        if(obj[key] instanceof Object === true) {          
            newObj[key] = deepCopy(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

console.log(deepCopy(obj))
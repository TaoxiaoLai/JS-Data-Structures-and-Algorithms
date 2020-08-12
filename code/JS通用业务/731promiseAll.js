// 实现Promise.all
// ) 核心思路

// 1、接收一个 Promise 实例的数组或具有 Iterator 接口的对象作为参数
// 2、这个方法返回一个新的 promise 对象
// 3、遍历传入的参数，用Promise.resolve()将参数"包一层"，使其变成一个promise对象
// 4、参数所有回调成功才是成功，返回值数组与参数顺序一致
// 5、参数数组其中一个失败，则触发失败状态，第一个触发失败的 Promise 错误信息作为 Promise.all 的错误信息。

// 实现要点：1、判断参数是数组 2、返回是promise对象 3、所有成功才成功 4、一个失败就失败



function promiseAll(promises) {
    // 判断参数是否是数组
    if (!Array.isArray(promises)) {
        throw new TypeError('argument must be array')
    }
    // 返回一个promise对象
    return new Promise((resolve, reject) => {
        let len = promises.length
        let resolvedResult = [] // 存放参数执行promise后的结果
        let resolvedCount = 0   // 执行了参数里的几个promise
        for (let i=0; i<len; i++) {
            // 用promise.resolve对每一项进行包裹，让其变成promise对象，这样才能处理每一项执行成功与否
            Promise.resolve(promises[i]).then(value => {
                resolvedCount++
                resolvedResult[i] = value
                if (resolvedCount == len) {     //当其与promises的长度相等时，说明执行完了
                    return resolve(resolvedResult)
                }
            }, error => {
                return reject(error)
            })
        }
    })
}

// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
promiseAll([p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})

function promiseAll805(promises) {
    if (promises instanceof Array === false) {
        throw new TypeError('arguments must be array')
    }
    return new Promise((resolve, reject) => {
        let result = []
        let count = 0
        for (let i=0; i<promises.length; i++) {
            let p = Promise.resolve(promises[i])
            p.then(res => {
                result[i] = res
                count++
                if(count === len) {
                    return resolve(result)
                }
            }, err => {
                reject(err)
            })
        }
    })
}
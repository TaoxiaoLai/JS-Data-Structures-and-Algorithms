// 7.30 -- promise 的特性、优缺点，内部是如何实现的，动手实现 Promise

// 简单实现版
// 最简单的Promise实现有7个主要属性, state(状态), value(成功返回值), reason(错误信息), resolve方法, reject方法, then方法.
class easyPromise {
    constructor(executor) {
        this.state = 'Pending'
        this.value = undefined
        this.reason = undefined
        let resolve = value => {
            this.state = 'Fulfilled'
            this.value = value
        }
        let reject = reason => {
            this.state = 'Rejected'
            this.reason = reason
        }
        try {
            executor(resolve, reject)
        } catch(err) {
            reject(err)
        }
    }
    then(onFulfilled, onRejected) {
        if (this.state === 'Fulfilled') {
            onFulfilled(this.value)
        }
        if (this.state === 'Rejected') {
            onRejected(this.reason)
        }
    }
}

var p = new easyPromise(function(resolve,reject){resolve(1)}); 
p.then(function(x){console.log(x)})

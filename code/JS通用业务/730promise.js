// 7.30 -- promise 的特性、优缺点，内部是如何实现的，动手实现 Promise

// 简单实现版
// 最简单的Promise实现有7个主要属性, state(状态), value(成功返回值), reason(错误信息), resolve方法, reject方法, then方法.
class easyPromise {
    constructor(executor) {         // promise接收一个立即执行函数做参数
        this.state = 'Pending'     // 保存当前promimse的状态
        this.value = undefined      // 成功时的返回值
        this.reason = undefined     // 失败时的返回值
        let resolve = value => {    // 定义resolve函数
            if (this.state === 'pending') {
                this.state = 'Fulfilled'    // 改变promise的状态
                this.value = value          // 改变promise成功时的返回值
            }
        }
        let reject = reason => {    // 定义reject函数
            if (this.state === 'pending') {
                this.state = 'Rejected'     // 改变promise的状态
                this.reason = reason        // 改变promis失败时的返回值
            }
        }
        try {
            executor(resolve, reject)   // 执行传进来的立即执行函数
        } catch(err) {
            reject(err)
        }
    }
    then(onFulfilled, onRejected) {     // 接收两个回调函数做参数
        if (this.state === 'Fulfilled') {   // 当成功状态时
            onFulfilled(this.value)     // 第一个回调函数会把resolve的结果传进去做参数
        }
        if (this.state === 'Rejected') {    // 当失败状态时
            onRejected(this.reason)     // 第二个回调函数会把reject的结果传进去做参数
        }
    }
}

var p = new easyPromise(function(resolve,reject){resolve(1)}); 
p.then(function(x){console.log(x)})

class easyPromise804 {      // 比较熟悉
    constructor(executor) {
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        let resolve = result => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = result
            }
        }
        let reject = reason => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
            }
        }
        try {
            executor(resolve, reject)
        } catch(err) {
            reject(err)
        }
    }
    then(onFulfilled, onRejected) {
        if (this.state === 'fulfilled') {
            onFulfilled(this.value)
        }
        if (this.state === 'rejected') {
            onRejected(this.reason)
        }
    }
}

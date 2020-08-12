// 7.30 -- promise 的特性、优缺点，内部是如何实现的，动手实现 Promise

// 简单实现版
// 最简单的Promise实现有7个主要属性, state(状态), value(成功返回值), reason(错误信息), resolve方法, reject方法, then方法.

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise(exector) {
    const that = this
    that.state = PENDING
    that.value = undefined
    that.reason = undefined
    // 下面两个用于保存then中的回调
    that.fulfilledCallback = []
    that.rejectedCallback = []
    function resolve(value) {
        if(that.state === PENDING) {
            that.state = FULFILLED
            that.value = value
            that.fulfilledCallback.map(cb => cb(that.value))
        }
    }
    function reject(reason) {
        if(that.state === PENDING) {
            that.state = REJECTED
            that.reason = reason
            that.rejectedCallback.map(cb => cb(that.reason))
        }
    }
    try {
        exector(resolve, reject)
    } catch(err) {
        reject(err)
    }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }
    if(that.state === PENDING) {
        that.fulfilledCallback.push(onFulfilled)
        that.rejectedCallback.push(onRejected)
    }
    if(that.state === FULFILLED) {
        onFulfilled(that.value)
    }
    if(that.state === REJECTED) {
        onRejected(that.reason)
    }
}

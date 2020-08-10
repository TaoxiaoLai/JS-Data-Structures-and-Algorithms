// Promise 链式调用如何实现

function MyPromise(exector) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    resolve = value => {        // 注意不能写let，直接写函数就可以
        if(this.state === 'pending') {
            this.value = value
            this.state = 'fulfilled'
        }
    }
    reject = reason => {
        if(this.state === 'pending') {
            this.reason = reason
            this.state = 'rejected'
        }
    }
    try {
        exector(resolve, reject)
    }catch(err) {
        reject(err)
    }
}

MyPromise.prototype.then = function(onfulfilled, onRejected) {
    if(this.state === 'fulfilled') {
        onfulfilled(this.value)
    }
    if(this.state === 'rejected') {
        onRejected(this.reason)
    }
}
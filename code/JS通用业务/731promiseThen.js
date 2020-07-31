// 实现promise.then
// 其实就是要实现promise

class myPromise {
    constructor(exector) {
        this.state = 'pending'
        this.success = undefined
        this.failure = undefined
        let resolve = success => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.success = success
            }           
        }
        let reject = failure => {
            if (this.state = 'pending') {
                this.state = 'rejected'
                this.failure = failure
            }
        }
        try {
            exector(resolve, reject)
        } catch {
            reject(err)
        }
    }
    then(onFulfilled, onRejected) {
        if(this.state === 'fulfilled') {
            onFulfilled(this.success)
        }
        if(this.state === 'rejected') {
            onRejected(this.failure)
        }
    }
}

function MyPromise(exector) {
    this.state = 'pending'
    this.success = undefined
    this.failure = undefined
    resolve = function(success) {
        if (this.state === 'pending') {
            this.state = 'fulfilled'
            this.success = success
        }
    }
    reject = function(failure) {
        if (this.state === 'pending') {
            this.state = 'reject'
            this.failure = failure
        }
    }
    try {
        exector(resolve, reject)
    } catch(err) {
        reject(err)
    }
}
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    let self = this
    if (self.state === 'fulfilled') {
        onFulfilled(self.success)
    }
    if (self.success === 'rejected') {
        onRejected(self.failure)
    }
}
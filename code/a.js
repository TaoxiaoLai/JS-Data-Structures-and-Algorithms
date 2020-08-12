function findDeepRoot(root) {
    let leftres = []
    let rightres = []
    let leftcount = 0
    let rightcount = 0
    if(!root) {
        return 
    }
    function dfs(root) {
        if(leftres.length === 0) {
            leftres.push(root)
        }
        if(rightres === 0) {
            rightres.push(root)
        }
        if(root.left) {
            leftcount++
            leftres.shift(root)
            leftres.push(root.left)
            dfs(root.left)
        }
        if(root.right) {
            rightcount++
            rightres.shift(root)
            rightres.push(root.right)
            dfs(root.right)
        }
        if(root.left === null && root.right === null) {
            return
        }
    }
    dfs(root)
    return leftcount > rightcount? leftres.length : rightres.length
}

function MyPromise(exector) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    resolve = value => {
        if(this.state === 'pending') {
            this.state = 'fulfilled'
            this.value = value
        }
    }
    reject = reason => {
        if(this.state === 'pending') {
            this.state = 'rejected'
            this.reason = reason
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
    if(self.state === 'pending') {
        let timer = null
        if(timer) {
            clearTimeout(timer)
        }
        timer = set(() => {
            if(self.state === 'fulfilled') {
                onFulfilled(self.value)
            }
            if(self.state === 'rejected') {
                onRejected(self.reason)
            }
        }, 1000)
    }
}
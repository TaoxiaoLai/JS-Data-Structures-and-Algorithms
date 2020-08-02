// 7.29--函数的节流
// 函数的节流其实就是事件无论触发多少次，都只在指定时间间隔执行一次

// 函数节流的时间戳实现
// 使用时间戳实现的话，第一次一定会被执行，最后一次一定不会被执行
function throttle1(fn, wait) {
    let preTime = 0
    return function(...args) {      // 返回一个函数才能用闭包保存上次的时间戳
        let that = this
        if (Date.now() - preTime >= wait) {
            preTime = Date.now()
            fn.apply(that, args)
        }
    }
}

// 函数节流的setTimeout实现
function throttle2(fn, wait) {
    let timer = null
    return function(...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                clearTimeout(timer)
                timer = null
            }, wait)
        }
    }
}

// 上述两种实现的结合
function throttle3(fn, wait) {
    let timer = null
    let preTime = 0
    return function(...args) {
        let that = this
        if (Date.now() - preTime >= wait) {
            clearTimeout(timer)
            timer = null
            preTime = Date.now()
            fn.apply(that, args)
        } else if (!timer) {
            timer = setTimeout(() => {
                timer = null
                fn.apply(that, args)
            })
        }
    }
}

function throttle1_802(fn, wait) {
    let date = 0
    // 有问题的写法
    // if (Date.now() - date >= wait) {
    //     fn()
    //     date = Date.now()
    // }
    // return
    return function(...args) {
        let that = this
        if (Date.now() - date >= wait) {
            date = Date.now()
            fn.apply(that, args)
        }
    }
}

function throttle2_802(fn, wait) {  // 不熟
    let timer = null
    return function(...args) {
        if(!timer) {
            timer = setTimeout(() => {      // 节流就是在setTimeout函数里面将timer清空，这样就能保证每次都是间隔执行
                fn.apply(this, args)
                clearTimeout(timer)
                timer = null
            }, wait)
        }
    }
}
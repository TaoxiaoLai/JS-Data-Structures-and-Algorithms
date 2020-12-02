// 动手实现一个 repeat 方法
// function repeat(func, times, wait) {
//     // TODO
// }
// const repeatFunc = repeat(alert, 4, 3000);
// 调用这个 repeatFunc ("hellworld")，会alert4次 helloworld, 每次间隔3秒

function repeat(func, times, wait) {
    return async function() {           // 返回一个asycn函数，这个函数里面通过for循环控制执行里面的await的次数
        for (let i=0; i<times; i++) {
            await sleep(func, wait, arguments)  // 通过await函数控制延迟时间
        } 
    }      
}

function sleep(func, wait, args) {  // aiait函数后面接的是一个promise
    return new Promise((resolve, reject) => {   // 返回一个promise
        setTimeout(() => {              // 通过setTimeout来控制延迟时间
            func.apply(this, args)      // 执行传入的函数
            resolve()                   // 返回resolve
        }, wait)
    })
}

var repeatFunc = repeat807(console.log, 4, 3000);
repeatFunc('helloworld')

function repeat807(func, time, wait) {
    return async function() {
        for(let i=0; i<time; i++) {
            await sleep(func, wait, arguments)
        }
    }
}

function sleep807(func, wait, args) {
    return new Promise(resolve => {
        setTimeout(() => {
            func.apply(this, args)
            resolve()
        }, wait)
    })
}

function repeat808(func, time, wait) {
    return async function() {
        for(let i=0; i<time; i++) {
            await sleep(func, wait, arguments)
        }
    }
}

function sleep808(func, wait, args) {
    return new Promise(resolve => {
        setTimeout(() => {
            func.apply(this, args)
            resolve()
        }, wait)
    })
}
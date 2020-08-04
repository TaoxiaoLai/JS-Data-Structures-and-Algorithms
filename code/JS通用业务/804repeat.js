// 动手实现一个 repeat 方法
// function repeat(func, times, wait) {
//     // TODO
// }
// const repeatFunc = repeat(alert, 4, 3000);
// 调用这个 repeatFunc ("hellworld")，会alert4次 helloworld, 每次间隔3秒

function repeat(func, times, wait) {
    return async function() {
        for (let i=0; i<times; i++) {
            await sleep(func, wait, arguments)
        } 
    }      
}

function sleep(func, wait, args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            func.apply(this, args)
            resolve()
        }, wait)
    })
}

var repeatFunc = repeat(console.log, 4, 3000);
repeatFunc('helloworld')
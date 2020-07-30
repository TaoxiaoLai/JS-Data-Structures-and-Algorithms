// 7.29--JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。
// 完善代码中Scheduler类，使得以下程序能正确输出


class Scheduler {
    constructor() {
        this.list = []
        this.running = 0
    }
    run() {
        if (this.list.length === 0 || this.running === 2) {     // 如果执行队列list为空或者正在执行的任务为2，则直接返回
            return                                              // 其实就是通过这个判断限制执行的任务数为2
        }
        const p = this.list.shift()     // 任务队列头部出队准备执行
        this.running++                  // 当前执行任务数加1
        p().then(result => {            // 执行出队的任务，执行完之后
            this.running--              // 当前任务执行数减1
            this.run()                  // 递归调用，这样才能将任务队列里面的所有任务执行完
            return result               // 返回任务执行的结果
        })    
    }
    add(promiseCreator) {   // promiseCreator是一个promise函数
        this.list.push(promiseCreator)  // 将要执行的函数全部都存入list执行队列里面
        this.run()
    }
}  
// const timout = (time) => new Promise(resolve => {
//     setTimeout(resolve, time)
// })
// const scheduler = new Scheduler();
// const addTask = (time, order) => {
//     scheduler.add(() => timout(time).then(() => {
//         console.log(order);
//     }))
// }
// addTask(1000, '1')
// addTask(500, '2')
// addTask(300, '3')
// addTask(400, '4')

// output: 2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4

// 改进，可以传入控制执行的个数
class Scheduler2 {
    constructor(runningNum) {
        this.list = []
        this.runningNum = runningNum
        this.running = 0
    }
    add(promiseCreator) {
        this.list.push(promiseCreator)
        this.run()
    }
    run() {
        if (this.list.length === 0 || this.running === this.runningNum) {
            return
        }
        const p = this.list.shift()
        this.running++
        p().then(result => {
            this.running--
            this.run()
            return result
        })
    }
}
const timout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})
const scheduler = new Scheduler2(4);
const addTask = (time, order) => {
    scheduler.add(() => timout(time).then(() => {
        console.log(order);
    }))
}
addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
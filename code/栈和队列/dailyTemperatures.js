// 栈问题进阶——递减栈
// 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。
// 如果之后都不会升高，请在该位置用 0 来代替。
// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，
// 你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
// 演示动画: https://www.bilibili.com/video/BV12t4y1274o/

// 


function dailyTemperatures(T) {
    let len = T.length
    let stack = []
    let res = (new Array(len)).fill(0)
    for(let i = 0; i<len; i++) {
        while(!stack.length && T[satck[stack.length - 1]] <= T[i]) {
            const top = satck.pop()
            res[top] = i - top
        }
        satck.push(i)
    }
    return res
}
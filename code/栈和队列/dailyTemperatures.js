// 栈问题进阶——递减栈
// 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。
// 如果之后都不会升高，请在该位置用 0 来代替。
// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，
// 你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
// 演示动画: https://www.bilibili.com/video/BV12t4y1274o/
//  0   1   2   3   4   5   6   7
// [73, 74, 75, 71, 69, 72, 76, 73]
//                               i
// [6, 7]

// res = [1, 1, 4, 2, 1, 1, 0, 0]
// 

function dailyTemperatures(T) {
    let len = T.length
    // 递减栈里面存储的是元素的索引，便于计算
    let stack = []
    // 初始化一个长度为len的结果数组，以0填充
    let res = (new Array(len)).fill(0)
    for(let i = 0; i<len; i++) {
        // 判断递减栈不为空且当前栈顶元素比当前遍历到的元素小
        while(!stack.length && T[satck[stack.length - 1]] <= T[i]) {
            // 栈顶元素出栈，将索引相减返回到结果数组
            const top = satck.pop()
            res[top] = i - top
        }
        // 如果栈为空或者递减，当前元素索引入栈
        satck.push(i)
    }
    return res
}
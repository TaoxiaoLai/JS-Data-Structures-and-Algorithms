// 栈的设计——最小栈的设计
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。

// 方法一，该方法getMin的时间复杂度为O(n)
// 初始化一个栈
function MinStackOne() {
    this.stack = []
}
// push方法
MinStackOne.prototype.push = function(x) {
    this.stack.push(x)
}
// pop方法
MinStackOne.prototype.pop = function() {
    this.stack.pop()
}
// top方法
MinStackOne.prototype.top = function() {
    return this.stack[this.stack.length-1]
}
// getMin方法
MinStackOne.prototype.getMin = function() {
    const { stack } = this
    const len = stack.length
    let minVal = Infinity
    for(let i=0; i<len; i++) {
        if (stack[i] < minVal) {
            minVal = stack[i]
        }
    }
    return minVal
}


// 方法二，该方法getMin的时间复杂度为O(1)
// 初始化栈和一个辅助栈，辅助栈是一个递减栈，该栈的栈顶元素就是最小元素
function MinStackTwo() {
    this.stack = []
    this.stack2 = []
}
// push方法
MinStackTwo.prototype.push = function(x) {
    this.stack.push(x)
    if (!this.stack2.length || this.stack2[this.stack2.length-1] > x) {
        this.stack2.push(x)
    }
}
// pop方法
MinStackTwo.prototype.pop = function() {
    if (this.stack.pop() == this.stack2[this.stack2.length-1]) {
        this.stack2.pop()
    }
}
// top方法
MinStackTwo.prototype.top = function() {
    return this.stack[this.stack.length-1]
}
// getMin方法
MinStackTwo.prototype.getMin = function() {
    return this.stack2[this.stack2.length-1]
}






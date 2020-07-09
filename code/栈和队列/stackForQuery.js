// 栈——使用栈来实现队列
// 使用栈实现队列的下列操作：
// push(x) -- 将一个元素放入队列的尾部。
// pop() -- 从队列首部移除元素。
// peek() -- 返回队列首部的元素。
// empty() -- 返回队列是否为空。
// 说明：只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
//       假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。


// stack1 [1,2,3] => 3,2,1
// stack2 [3,2,1] => 1,2,3
// query  [1,2,3] => 1,2,3
// method in stack: push pops  
// 要封装的队列的方法：push popq push popq popq stack1[] => stack2[]
//                   1, 2   1    3    2    3

/**
 * 初始化构造函数
 */
const MyQueue = function () {
    this.stack1 = []
    this.stack2 = []
};

MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
};

MyQueue.prototype.pop = function () {
    if(this.stack2.length === 0) {
        while(this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop()
};

MyQueue.prototype.peek = function () {
    if(this.stack2.length === 0) {
        while(this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2[this.stack2.length - 1]
};

MyQueue.prototype.empty = function () {
    if(this.stack1.length === 0 && this.stack2.length === 0) {
        return true
    } else {
        return false
    }
};
// 实现一个new操作符

// 1、创建一个空的简单JavaScript对象（即{}）；
// 2、链接该对象（即设置该对象的构造函数）到另一个对象 ；
// 3、将步骤（1）新创建的对象作为this的上下文 ；
// 4、如果该函数没有返回对象，则返回this。

function myNew(Con, ...args) {
    // 生成一个空对象
    this.obj = {}
    // 将空对象指向构造函数的原型对象
    Object.setPrototypeOf(this.obj, Con.prototype)
    // 这一步本质上其实就是将构造函数的this指向该空对象，并指行构造函数里面的代码
    Con.apply(this.obj, ...args)
    // 返回该空对象
    return this.obj
}

function A(a, b) {
    this.a = a
    this.b = b
}
A.prototype.c = 3

let x = myNew(A, [1,2])
let y = myNew(A, [3,4])
let z = new A(5,6)

console.log(x.c === y.c)
console.log(y.c === z.c)
console.log(z)

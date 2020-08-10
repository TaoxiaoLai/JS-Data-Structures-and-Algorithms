// 要求⽤不同⽅式对 A 进⾏改造实现 A.name 发⽣变化时⽴即执⾏ A.getName

/*
	已知对象A = {name: 'sfd', getName: function(){console.log(this.name)}},
	现要求⽤不同⽅式对A进⾏改造实现A.name发⽣变化时⽴即执⾏A.getName
*/

// 方法一： 使用Object.defineProperty实现
let A = {
    name: 'sfd',
    getName: function() {
        console.log(this.name)
    }
}
let temp = A.name
Object.defineProperty(A, 'name', {      // 注意这边要写具体的名称
    get() {
        return temp
    },
    set(newValue) {
        if(newValue !== temp) {
            temp = newValue
            A.getName()
        }
    }
})
// A.name = 'sdf' 
// console.log(A.name)

// 方法二：使用ES6中的proxy
let B = {
    name: 'sfd',
    getName: function() {
        console.log(this.name)
    }
}
let handle = {
    get(target, key) {          // 这边不用写具体名称
        return target[key]
    },
    set(target, key, newValue) {
        if(target[key] !== newValue) {
            target[key] = newValue
            target.getName()
        }
    }
}
let newB = new Proxy(B, handle)

//console.log(newA.name)
newB.name = 'sdf'
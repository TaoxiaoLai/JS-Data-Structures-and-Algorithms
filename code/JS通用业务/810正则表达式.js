// 识别 Email 的正则表达式

// 1、只允许英文字母、数字、下划线、英文句号、以及中划线组成
// 举例：zhangsan-001@gmail.com

let a = /^[a-zA-Z0-9-_]+@[a-zA-Z0-9-_]+(\.[a-zA-Z0-9-_]+)+$/
let str = 'zhangsan-001@gmail.com'
console.log(a.test(str))
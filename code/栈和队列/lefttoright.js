// 栈——对称问题中栈的应用
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足： 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 输入: "()[]{}" 输出: true    输入: "{[]}" 输出: true
// 输入: "([)]" 输出: false

function leftToRight(s) {
    const map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    const len = s.length()
    let stack = []
    for(let i=0; i<len; i++) {
        const ch = s[i]
        if(ch === "(" || ch === "[" || ch === "{") {
            stack.push(map[ch])
        } else {
            if(!stack.length || stack.pop() !== ch) {
                return false
            }
        }
    }
    return !stack.length
}
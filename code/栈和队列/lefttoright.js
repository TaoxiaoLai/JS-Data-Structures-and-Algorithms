// 栈——对称问题中栈的应用
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足： 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 输入: "()[]{}" 输出: true    输入: "{[()]}" 输出: true
// 输入: "([)]" 输出: false

// 说明: 看到括号问题就要联想到是否可以用栈来做

// in  1,2,3 | 3,2,1 out 
// {[( )]}
// {,[,(


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
        // 判断是否是左括号,左括号进栈
        if(ch === "(" || ch === "[" || ch === "{") {
            stack.push(map[ch])
        } else {
            // 右括号, 当栈为空(即表示第一个就是右括号)或者栈顶元素与当前右括号不匹配, 返回false
            if(!stack.length || stack.pop() !== ch) { 
                return false
            }
        }
    }
    // 假设最后一个是左括号,就会返回false;如果都匹配,stack为空,就会返回true
    return !stack.length
}
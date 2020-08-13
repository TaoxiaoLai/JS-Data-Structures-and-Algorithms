// shopee

// 版本号查询返回
function findVersion(arr, str) {
    let x = str[0]
    function sort(str1, str2) {
        let arr1 = str1.split('.')
        let arr2 = str2.split('.')
        for(let i=0; i<arr1.length; i++) {
            if(arr1[i] == arr2[i]) continue
            if(parseInt(arr1[i]) < parseInt(arr2[i])) {
                return str1
            } else {
                return str2
            }
        }
        return str1
    }
    for (let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length-1; j++) {
            if(sort(arr[j], arr[j+1]) === arr[j]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    if (x == '~') {
        for(let i=0; i<arr.length; i++) {
            if(arr[i].slice(0, 3) == str.slice(1, 4)) {
                return arr[i]
            }
        }
        return 'invalid'
    } else if (x == '^') {
        for(let i=0; i<arr.length; i++) {
            if(arr[i].slice(0, 2) == str.slice(1, 3)) {
                return arr[i]
            }
        }
        return 'invalid' 
    } else {
        for(let i=0; i<arr.length; i++) {
            if(arr[i] == str) {
                return arr[i]
            }
        }
        return 'invalid'
    }
}

// let arr = ["1.2.3","2.0.1","2.1.1","1.2.4"]
// let str = "^1.2.1"
// console.log(str[0])
// console.log(findVersion(arr, str))


// 仅反转字母
function reverseOnlyLetters( s ) {
    let arr = s.match(/[a-zA-Z]/g)
    if(arr === null) return s 
    let reverseStr = ''
    reverseStr = s.replace(/[a-zA-Z]/g, () => {
        arr.pop()
    })
    return reverseStr
}
console.log(reverseOnlyLetters('ab-cde'))


// 统计重复字符返回
function compressString( str ) {
    let arr = str.split('')
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i] == arr[i+1]) {
            let temp = arr[i]
            let count = 2
            let j = i+2
            while(j<arr.length && arr[j] == temp) {
                count++
                j++
            }
            arr[i] = `${count}${temp}`
            arr.splice(i+1, count-1)
        }
    }
    return arr.join('')
}

let str = "accaccx"
// let arr = str.split('')
// arr.splice(2, 1)
// console.log(arr)
console.log(compressString(str))
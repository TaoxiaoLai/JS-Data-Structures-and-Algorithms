// 小数相乘
function multy1(num1, num2) {
    let m = 0
    let n1 = num1.toString()
    let n2 = num2.toString()
    let arr1 = n1.split('.')
    let arr2 = n2.split('.')
    if(arr1.length < 2 || arr2.length < 2) {
        return num1 * num2
    }
    try{
        m += arr1[1].length
    }catch(e) {}
    try{
        m += arr2[2].length
    }catch(e) {}
    return Number(n1.replace('.', ''))*Number(n2.replace('.', ''))/Math.pow(10, m)
}

function multy(num1, num2) {
    num1 += ''
    num2 += ''
    let len1 = num1.split('.').length
    let len2 = num2.split('.').length
    if(len1) {
        num1 = num1.replace('.', '')
    }
    if(len2) {
        num2 = num2.replace('.', '')
    }
    if(len1 < 2 && len2 < 2) {
        return num1*num2*100/Math.pow(10, len1+len2)
    } else if (len1 == 2 && len2 == 2) {
        return num1*num2/Math.pow(10, len1+len2)
    } else {
        return num1*num2*10/Math.pow(10, len1+len2)
    }
}

// console.log(multy(20.12, 2))
// console.log(multy(0.9,0.001))
// console.log(multy(3,70))
// console.log(multy(6,3.23))
// console.log(multy(3.23,6))

// 最小步数

function jump(arr) {
    let res = 0
    let maxStep = 0
    let last = 0
    let len = arr.length 
    for(let i=0; i<len-1; i++) {
        maxStep = Math.max(maxStep, i+arr[i])
        if(last == i) {
            last = maxStep
            res++
        }
        if(last >= len-1) {
            break
        }
    }
    if(res===0) {
        return Infinity
    } else {
        return res
    }
}

//console.log(jump([2, 3, 1, 1, 4]))


//console.log(jump(JSON.parse('[2, 3, 1, 1, 4]')))

function maxHeight(arr, m, x) {
    function sort(arr) {
        return arr.sort((a,b) => {
            return a-b
        })
    }
    sort(arr)
    while(m != 0) {
        arr[0] = parseInt(arr[0]) + x
        m--
        sort(arr)
    }
    return arr[0]
}

// console.log(maxHeight([5,2,3], 2, 2))


function* nextId(){
    let id =0;
    while(true) {
        id++;
        yield id;
    }
}

class SingleItem {
    constructor() {
        this.id = 0
        this.instance = null;
    }
    static getInstance() {
        if(!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
    nextId() {
        return this.id++
    }
}

let a = new SingleItem()
console.log(a.nextId())
console.log(a.nextId())
console.log(a.nextId())
console.log(a.nextId())
console.log(a.nextId())

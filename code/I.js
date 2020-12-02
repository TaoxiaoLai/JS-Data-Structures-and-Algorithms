// 合并重叠区间

function mergeDouble(arr) {
    let len = arr.length
    if(len<=1) return arr
    arr.sort( (a, b) => {
        return a[0] - b[0]
    })
    let mer = 0
    let cur = 0
    let end = 0
    let res = []
    for(let i=0; i<len; i++) {
        cur = i
        end = arr[i][1]
        for(let j=i+1; j<len; j++) {
            if(arr[j][0] <= end) {
                cur = j
                if(end<arr[j][1]) {
                    end = arr[j][1]
                    mer++
                }
            } else {
                break
            }
        }
        if(mer) {
            let temp = [arr[i][0], end]
            res.push(temp)
            i += mer
            mer = 0
        } else {
            let temp = [arr[i][0], end]
            res.push(temp)
        }   
    }
    return res
}

// console.log(mergeDouble([[1,3], [8,10], [2,6], [4,7], [15,18]]))


let charNum = {
    '零': 0,
    '一': 1,
    '二': 2,
    '三': 3,
    '四': 4,
    '五': 5,
    '六': 6,
    '七': 7,
    '八': 8,
    '九': 9
}

let charValue = {
    '十': {value: 10, secUnit: false},
    '百': {value: 100, secUnit: false},
    '千': {value: 1000, secUnit: false},
    '万': {value: 10000, secUnit: false},
    '亿': {value: 100000000, secUnit: false}
}

function chnToNum(str) {
    let rtn = 0
    let sec = 0
    let num = 0
    let secUnit = false
    let char = str.split('')
    for(let i=0; i<char.length; i++) {
        let tempNum = charNum[char[i]]
        if(typeof tempNum !== 'undefined') {
            num = tempNum
            if(i === char.length - 1) {
                sec += num
            }
        } else {
            let unit = charValue[char[i]].value
            secUnit = charValue[char[i]].secUnit
            if(secUnit) {
                sec = (sec + num) * unit
                rtn += sec
                sec = 0
            }else {
                sec += (num * unit)
            }
            num = 0
        }
    }
    return rtn + sec
}

console.log(chnToNum('九千八百七十六万四千三百零二'))
function a(N, s1, s2) {
    let nums = s2.split('')
    nums = nums.sort((a,b) => {
        return a-b
    })
    let res = []
    let temp = []
    let map = {}
    let bt = (temp) => {
        if(temp.length == N) {
            let x = parseInt(temp.join(''))
            if(res.length === 0 || x<res[0]) {
                res[0] = x
            }
            return
        }
        for(let i=0; i<N; i++) {
            if(map[i] || (i>0 && !map[i-1] && nums[i]==nums[i-1])) {
                continue
            }
            map[i] = true
            temp.push(nums[i])
            bt(temp.slice())
            map[i] = false
            temp.pop()
        }
    }
    bt(temp)
    if(res[0] < parseInt(s1)) {
        return -1
    }
    return res[0]
}

// console.log(a(3, '123', '322'))

// console.log('b' + 'a')

let num = 4
// let x = String.fromCharCode(93 + parseInt(num))
// let x = String.fromCharCode(61 + parseInt(num))
// let x = String.fromCharCode(93+25 + parseInt(num))
// console.log(x)

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
            if(count>=4 && count<=29) {
                let x = String.fromCharCode(93 + parseInt(count))
                arr[i] = `0${x}${temp}`
                arr.splice(i+1, count-1)
            } else if (count>29 && count<=55){
                let x = String.fromCharCode(61 + parseInt(count))
                arr[i] = `0${x}${temp}`
                arr.splice(i+1, count-1)
            } else if(count > 55) {
                let countX = count%55
                let len = Math.floor(count/55)
                for(let i=0; i<len; i++) {
                    if(i==0) {
                        arr[i] = `0Z${temp}`
                    } else {
                        arr[i] += `0Z${temp}`
                    }
                }
                if(countX>=4 && countX<=29) {
                    let x = String.fromCharCode(93 + parseInt(countX))
                    arr[i] += `0${x}${temp}`
                    arr.splice(i+1, count-1)
                } else if (countX>29 && countX<=55){
                    let x = String.fromCharCode(61 + parseInt(countX))
                    arr[i] += `0${x}${temp}`
                    arr.splice(i+1, count-1)
                }
            }
        }
    }
    return arr.join('')
}
let str = "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBeeeeeeeeeeFYHHnjHAPQQc"
let str2 = "0ZB0tB0geFYHHnjHAPQQc"
console.log(compressString(str) == str2)



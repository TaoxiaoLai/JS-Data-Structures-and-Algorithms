// 版本号排序
// 版本号排序versions是一个项目的版本号列表，因多人维护，不规则var versions=['1.45.0','1.5','6','3.3.3.3.3.3.3']
// 要求从小到大排序var sorted=['1.5','1.45.0','3.3.3.3.3.3','6']， 注意：1.45.0 > 1.5

// 本质还是数组的排序，只是原来排序比较的是数字大小，现在要重写一个新方法来替代数字大小的比较

function sortVersion(arr) {
    function compare(a,b) {     // 比较两个版本号的大小
        let arr1 = a.split('.')
        let arr2 = b.split('.')
        let len = arr1.length > arr2.length? arr2.length : arr1.length
        for (let i=0; i<len; i++) {
            if (arr1[i] == arr2[i]) continue
            if (parseInt(arr1[i]) < parseInt(arr2[i])) {
                return b
            } else {
                return a
            }
        }
        return arr1.length > arr2.length? a : b
    }
    for (let i=0; i<arr.length; i++) {      // 冒泡排序
        for (let j=0; j<arr.length-1; j++) {
            if (compare(arr[j], arr[j+1]) == arr[j]) {  // 用版本号大小比较规则来替换原来的数字大小比较
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
const arr = ['1.45.0','1.5','6','3.3.3.3.3.3.3']
console.log(sortVersion(arr))

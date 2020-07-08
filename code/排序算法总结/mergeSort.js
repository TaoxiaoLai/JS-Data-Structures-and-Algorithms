// 归并排序 arr长为n
function mergeSort(arr) {  // O(nlogn)
    const len = arr.length
    if (arr.length===1) {      
        return arr
    }
    const mid = Math.floor(len/2)   
    const leftArr = mergeSort(arr.slice(0, mid))
    const rightArr = mergeSort(arr.slice(mid, len))
    mergeArr(leftArr, rightArr)  // O(n)
    return arr
}
function mergeArr(leftArr, rightArr) {  // O(n)
    const leftLen = leftArr.length
    const rightLen = rightArr.length
    let i = 0
    let j = 0
    let res = []
    while(i<leftLen && j<rightLen) {
        if(leftArr[i] < rightArr[j]) {
        res.push(leftArr[i])
        i++
        }else {
        res.push(rightArr[j])
        j++
        }
    }
    if(i<leftLen) {
        return res.concat(leftArr.slice(i,leftLen))
    }
    if(j<rightLen) {
        return res.concat(rightArr.slice(j,rightLen))
    }
}
// console.log(mergeArr([1,2,3],[2,5,6]))
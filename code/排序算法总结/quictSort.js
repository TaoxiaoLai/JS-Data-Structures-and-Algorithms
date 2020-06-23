// 快速排序算法
// 挖坑插入排序
// 取一个基准值

function quickSort(arr, left=0, right=arr.length-1) {
    if(left < right) {
        let i = left
        let j = right
        let x = arr[i]
        while (i < j) {
            while (i < j && x <= arr[j]) {
                j--
            }
            if (i < j) {
                arr[i] = arr[j]
                i++
            }
            while (i < j && x >= arr[i]) {
                i++
            }
            if (i < j) {
                arr[j] = arr[i]
                j--
            }
        }
        arr[i] = x
        quickSort(arr, 0, i-1)
        quickSort(arr, i+1, right)
    }
    return arr
}

O(nlogn)
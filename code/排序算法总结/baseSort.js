// 冒泡排序
// 1、基本冒泡排序
function bubSort(arr) {
    let len = arr.length
    for (let i=0; i<len; i++) {
      for (let j=0; j<len-1; j++) {
        if(arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
      }
    }
    return arr
}
  
  
// 2、优化后的冒泡排序
function betterBubSort(arr) {
    let len = arr.length
    for (let i=0; i<len; i++) {
      let k = false
      for (let j=0; j<len-1-i; j++) {
        if(arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
          k = true
        }
      }
      if(!k) {
        break
      }
    }
    return arr
}
//最好的 O(n)
//平均和最差的 O(n^2)
  
  
// 选择排序
function selectSort(arr) {
    let len = arr.length
    let minIndex
    for (let i=0; i<len-1; i++) {
      minIndex = i
      for (let j=i; j<len; j++) {
        if(arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
      }
    }
    return arr
}
//都是O(n^2)
  
  
// 插入排序
function insertSort(arr) {
    let len = arr.length
    let temp
    for (let i=1; i<len; i++) {
      let j=i 
      temp = arr[i]
      if(arr[i-1] > arr[i]) {
        while(j>0 && arr[j-1]>temp) {
          arr[j] = arr[j-1]
          j--
        }
      }
      arr[j] = temp
    }
    return arr
}
//最好的O(n)
//最坏的O(n^2)
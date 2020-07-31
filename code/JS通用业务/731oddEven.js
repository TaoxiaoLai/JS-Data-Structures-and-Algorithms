// 设计一个函数，奇数次执行的时候打印 1，偶数次执行的时候打印 2

function oddEven() {
    oddEven.count = oddEven.count? oddEven.count+1 : 1
    if(oddEven.count % 2 != 0) {
        console.log(1)
    } else {
        console.log(2)
    }
}
oddEven()
oddEven()
oddEven()
// 给定起止时间，返回之间的所有日期

function getMonthList(start, end) {
    function getDate(dateStr) {
        let dateArr = dateStr.split('-')
        let date = new Date(dateArr[0], parseInt(dateArr[1])-1)
        return date
    }
    let startDate = getDate(start)
    let endDate = getDate(end)
    console.log(startDate.getTime(), endDate.getTime())
    let arr = []
    while (startDate.getTime() < endDate.getTime()) {
        const year = startDate.getFullYear()
        const month = startDate.getMonth()+1<10? '0'+(startDate.getMonth()+1) : startDate.getMonth()+1
        startDate.setMonth(parseInt(month))
        arr.push(`${year}-${month}`)
    }
    arr.shift()
    return arr
}

console.log(getMonthList('2019-01', '2020-08'))

function getDateList(start, end) {
    function getDate(dateStr) {
        let dateArr = dateStr.split('-')
        let date = new Date(dateArr[0], parseInt(dateArr[1])-1, dateArr[2])
        return date
    }
    let startDate = getDate(start)
    let endDate = getDate(end)
    let arr = []
    while(startDate.getTime() < endDate.getTime()) {
        const year = startDate.getFullYear()
        const month = startDate.getMonth()+1 < 10? '0'+(startDate.getMonth()+1) : startDate.getMonth()+1    // 注意只有month要加1
        const day = startDate.getDate() < 10? '0'+startDate.getDate() : startDate.getDate()
        startDate.setDate(startDate.getDate()+1)
        arr.push(`${year}-${month}-${day}`)
    }
    arr.shift()
    return arr
}
console.log(getDateList('2019-02-01', '2019-03-01'))
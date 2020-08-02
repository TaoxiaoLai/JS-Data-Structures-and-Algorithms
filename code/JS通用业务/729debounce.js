// 7.29--函数防抖
// 防抖：不管事件触发频率多高，一定在事件触发 n 秒后才执行，如果在一个事件执行的 n秒内又触发了这个事件，
// 就以新的事件的时间为准，n秒后才执行，总之，触发完事件 n 秒内不再触发事件，n秒后再执行。
// 实际场景就是用户可能连续的点击触发某个事件，但是只在最后一次触发的n秒后才执行事件

function debounce(fn, wait) {
    let timer = null
    return function() {
        if (timer !== null) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn, wait)
    }
}

function debounce802(fn, wait) {    // 不熟
    let timer = null
    return function() {     // 返回一个函数，这样通过闭包才能取到timer
        if(timer !== null) {    // 判断存在，存在就清除，防抖是在setTimeout外面就要清除timer，这样才能保证只触发最后一次
            clearTimeout(timer)
        }
        timer = setTimeout(fn, wait)    // 设置timer
    }
}
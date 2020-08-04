// 请实现如下的函数，可以批量请求数据，所有的URL地址在urls参数中，同时可以通过max参数控制请求的并发度。
// 当所有的请求结束后，需要执行callback回调。发请求的函数可以直接使用fetch

// 用setTimeout模拟fetch发送
function sendRequest2(urls, max, callback) {
    // arr存储并发max的promise数组
    let arr = [], i = 0;
    // 处理fetch
    function handleFetch() {
        // 所有的都处理完了，返回一个resolve
        if (i === urls.length) return Promise.resolve();
        // 取出第i个url，放入fetch里面，每取一次i++
        let url = urls[i++]
        if (url) {
            let one = new Promise((resolve, reject) => {
                setTimeout(()=>{
                    console.log(`当前发送：${url}`);
                    resolve(url);
                })
            });
            // 将当前的promise存入并发数组中
            arr.push(one);
            console.log(arr)
            // 当promise执行完毕后，从数组删除
            one.then(() => {arr.splice(arr.indexOf(one), 1)});
            let p = Promise.resolve()
            // 当并行数量达到最大后，用race比较第一个完成的，然后再调用一下函数自身
            if (arr.length >= max) p = Promise.race(arr);
            return p.then(() => handleFetch());           
        }
    }
    // urls循环完后，现在arr里面剩下最后max个promise对象， 使用all等待所有的都完成之后执行callback
    return handleFetch()
    .then(() => Promise.all(arr))
    .then(() => {
        callback();
    })
}

var urls = [1,2,3,4,5];
const limit = 3;

sendRequest2(urls, limit, function() {
    console.log('all urls sended!')
});

function sentRequest(urls, limit, callback) {
    let allUrls = [...urls]     // 存储所有要发送的urls
    let fetchArr = []           // 并发执行的最大为limit的promise
    let i = 0
    function handleFetch() {
        if (i === allUrls.length) {     // 判断边界条件，说明所有的urls都开始发送了
            return Promise.resolve()    // 返回一个promise
        }
        let url = allUrls[i++]
        if (url) {
            let fetchUrl = fetch(url)
            fetchArr.push(fetchUrl)
            fetchUrl.then(() => {       // 注意，此时的then是一个异步，它并不会马上执行
                fetchArr.splice(fetchArr.indexOf(fetchUrl), 1)  // 发送完成后就删掉
            })
            let p = Promise.resolve()       // p声明为一个promise实例
            if (fetchArr.length >= limit) { // 如果fetchArr已经达到限制长度了
                p = Promise.race(fetchArr)  // 则通过让p等于Promise.race(fetchArr),来保证要执行完一个才能出队
            }
            return p.then(() => handleFetch())  // 如果fetchArr还没达到限制长度，则继续调用自身；如果达到限制长度，则调用自身时会触发上面的fetchUrl.then
        }
    }
    return handleFetch().then(() => {
        Promise.all(fetchArr)
    }).then(() => {
        callback
    })
}


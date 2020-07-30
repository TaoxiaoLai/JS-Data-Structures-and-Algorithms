// 7.29--数组乱序——洗牌算法
// 核心思想就是从后往前遍历一遍数组，遍历的过程中随机生成一个数组索引范围内的数，将其与当前遍历的数交换

function shuffle(array) {
    let current = array.length - 1
    while(current > -1) {
        const random = Math.floor(array.length * Math.random());
        [array[current], array[random]] = [array[random], array[current]];
        current--;
    }
    return array
}

console.log(shuffle([1,2,3,4,5,6]))
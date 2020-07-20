// 队列——双端队列
// 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]
// 解释: 滑动窗口的位置
// ---------------
// [1 3 -1] -3 5 3 6 7
// 1 [3 -1 -3] 5 3 6 7
// 1 3 [-1 -3 5] 3 6 7
// 1 3 -1 [-3 5 3] 6 7
// 1 3 -1 -3 [5 3 6] 7
// 1 3 -1 -3 5 [3 6 7]
// 最大值分别对应：3 3 5 5 6 7

// 双指针+遍历法
function maxSlidingWindow1(nums, k) {
    let len = nums.length
    let m, n, temp
    let res = []
    for (let i=0; i<=len-k; i++) {
        temp = nums[i]
        m = i+1
        n = i+k-1
        while (m <= n) {
            if (nums[m] >= temp) {
                temp = nums[m]
            }
            m++
        }
        res.push(temp)
    }
    return res
}


// 双端队列法
function maxSlidingWindow2(nums, k) {
    let len = nums.length
    let query = []
    let res = []
    for (let i=0; i<len; i++) {
        while (query.length !== 0 || nums[i] >= query[query.length - 1]) {
            query.pop()
        }
        query.push(nums[i])
        if (i>=k-1) {
            if (i>=k && query[0] === nums[i-k+1]) {
                query.shift()
            }
            res.push(query[0])
        }
    }
    return res
}
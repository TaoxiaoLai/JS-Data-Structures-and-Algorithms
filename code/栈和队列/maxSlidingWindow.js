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
function maxSlidingWindow(nums, k) {

}

// 
// 三数求和 ———— map法 + 双指针法
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

function threeSun(nums) {
    nums.sort((a,b) => {
      return a-b
    })
    let len = nums.length
    let res = []
    for(let i=0; i<len-2; i++) {
      if(i>0 && nums[i]===nums[i-1]) {
        continue
      }
      let j=i+1
      let k=len-1
      while(j<k) {
        if(nums[i]+nums[j]+nums[k]<0) {
          j++
          while(j<k&&nums[j]===nums[j-1]) {
            j++
          }
        }else if(nums[i]+nums[j]+nums[k]>0) {
          k--
          while(j<k&&nums[k]===nums[k+1]) {
            k--
          }
        }else {
          res.push([nums[i], nums[j], nums[k]])
          j++
          k--
          while(j<k&&nums[j]===nums[j-1]) {
            j++
          }
          while(j<k&&nums[k]===nums[k+1]) {
            k--
          }
        }
      }
    }
    return res
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if(nums.length < 5) return 0

    nums.sort((a, b) => a-b)
    
    // you only have 4 scenarioes
    // --remove the smallest 3 nums
    // --remove the biggest 3 nums
    // --remove the smallest 2 nums and biggest num
    // --remove the smallest 1 num and biggest 2 nums
    let ans = Infinity
    ans = Math.min(ans, nums[nums.length - 4] - nums[0]);
    ans = Math.min(ans, nums[nums.length - 3] - nums[1]);
    ans = Math.min(ans, nums[nums.length - 2] - nums[2]);
    ans = Math.min(ans, nums[nums.length - 1] - nums[3]);

    return ans
};
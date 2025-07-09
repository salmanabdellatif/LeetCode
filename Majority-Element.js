/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]] = obj[nums[i]] + 1;
        } else {
            obj[nums[i]] = 1;
        }
    }

    // get key of max value -most repeated-
    let max = Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
    return Number(max)
};
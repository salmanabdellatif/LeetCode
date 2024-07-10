/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let mapp = new Map()
    let i = 0
    while(i<nums.length){
        if(mapp.has(nums[i])){
            mapp.set(nums[i], mapp.get(nums[i])+1)
        }else{
            mapp.set(nums[i], 1)
        }
        i++
    }
    let maxKey = null;
    let maxValue = -Infinity;

    for (let [key, value] of mapp.entries()) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    }

    return maxKey;
};
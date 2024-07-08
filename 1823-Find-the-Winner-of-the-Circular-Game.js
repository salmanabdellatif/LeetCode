/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    if(n < 2) return 1

    let nums = []
    let i = 1
    while(i <= n){
        nums.push(i++)
    }
    i = 0
    let loserIndex
    while(nums.length > 1){
        loserIndex = (i + k - 1) % (nums.length)
        nums.splice(loserIndex, 1)
        i = loserIndex % nums.length
    }
    return nums[0]
};
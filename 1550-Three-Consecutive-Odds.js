/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count = 0
    let i = 0
    while(i<arr.length){
        if(arr[i]%2 === 1){
            count++
            if(count === 3) return true
        }else{
            count = 0
        }
        i++
    }
    return false
};
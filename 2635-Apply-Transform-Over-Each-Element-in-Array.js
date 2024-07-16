/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let i = 0
    let res = []
    while(i<arr.length){
        res.push(fn(arr[i], i))
        i++
    }
    return res
};
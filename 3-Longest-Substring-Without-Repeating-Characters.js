/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let cSet = new Set()
    let r = 0
    let l = 0
    let len = 0
    while(r < s.length){
        if(!cSet.has(s[r])){
            cSet.add(s[r++])
            len = cSet.size > len? cSet.size: len
        }else{
            cSet.delete(s[l++])
        }
    }
    return len
};
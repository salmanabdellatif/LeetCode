/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {}
    for(let i = 0; i < strs.length; i++){
        let key = strs[i].split('').sort().join('')
        if(obj[key]) {
            obj[key] = [...obj[key], strs[i]]
        } else {
            obj[key] = [strs[i]]
        }
    }
    return Object.values(obj)
};
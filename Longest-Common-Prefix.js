/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]
    for(let i = 0; i < strs.length; i++) {
        if(strs[i] === "") return ""
        while(strs[i].indexOf(prefix)) {
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix
};
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let longest = "";
    for(let i = 0; i <= str2.length; i++){
        let x = str1.slice(0, i + 1);
        let s1 = x.repeat(str1.length/x.length);
        let s2 = x.repeat(str2.length/x.length);
        if(str1 === s1 && str2 === s2){
            longest = x
        }
    }
    return longest
};
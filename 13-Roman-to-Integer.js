/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let t = 0
    for(let i = 0; i < s.length; i++){
        const cur = romanMap[s[i]]
        const next = romanMap[s[i+1]]
        if(next && cur < next){
            t -= cur
        }else{
            t += cur
        }
    }
    return t
};
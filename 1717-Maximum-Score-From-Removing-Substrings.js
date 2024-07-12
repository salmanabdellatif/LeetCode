/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let points = 0

    function removeLetters(s, l1, l2, point){
        let st = []
        for(let char of s){
            if(st.length && st[st.length-1] === l1 && char === l2){
                st.pop()
                points += point
            }else{
                st.push(char)
            }
        }
        return st.join('')
    }
    if(x>y){
        s = removeLetters(s, 'a', 'b', x)
        s = removeLetters(s, 'b', 'a', y)
    }else{
        s = removeLetters(s, 'b', 'a', y)
        s = removeLetters(s, 'a', 'b', x)
    }
    
    return points
};
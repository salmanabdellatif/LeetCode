/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let st = []
    for(let char of s){
        if(char === ')'){
            let temp = []
            while(st.length && st[st.length - 1] !== '('){
                temp.push(st.pop())
            }
            st.pop()
            st.push(...temp)
        }else{
            st.push(char)
        }
    }
    return st.join('')
    
};
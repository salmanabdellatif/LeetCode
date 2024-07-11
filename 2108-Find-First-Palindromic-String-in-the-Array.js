/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    // for(let i = 0; i < words.length; i++){
    //     if(words[i]===words[i].split('').reverse().join('')){
    //         return words[i]
    //     }
    // }
    // return ''
    function isPalindrome(word){
        let r = word.length-1
        let l = 0
        for(let i = 0; i<word.length; i++){
            if(word[l] !== word[r]){
                return false
            }
            l++
            r--
        }
        return true
    }
    for(let i = 0; i<words.length; i++){
        if(isPalindrome(words[i])){
            return words[i]
        }
    }
    return ''
};
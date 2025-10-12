/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) return s;
    let longest = "";

    for(let i = 0; i < s.length; i++){
        // odds palindromic
        let l = i - 1;
        let r = i + 1;
        while(l>= 0 && r < s.length){
            if(s[l] === s[r]){
                if(longest.length < s.slice(l, r + 1).length){
                    longest = s.slice(l, r + 1)
                }
            }else{
                break;
            }
            l--; r++;
        }
        // odds palindromic
        l = i;
        r = i + 1;
        while(l>= 0 && r < s.length){
            if(s[l] === s[r]){
                if(longest.length < s.slice(l, r + 1).length){
                    longest = s.slice(l, r + 1)
                }
            }else{
                if(longest < 1 ){
                    longest = s[l];
                }
                break;
            }
            l--; r++;
        }
    }

    return longest;
};
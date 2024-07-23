/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str = ''
    let i = 0

    if(word1.length === word2.length){
        while(i < word1.length){
            str += word1[i]
            str += word2[i]
            i++
        }
    }else if(word1.length < word2.length){
        i = 0
        while(i < word1.length){
            str += word1[i]
            str += word2[i]
            i++
        }
        str += word2.slice(i)
    }else{
        i = 0
        while(i < word2.length){
            str += word1[i]
            str += word2[i]
            i++
        }
        str += word1.slice(i)
    }

    // while(i < word1.length||i < word2.length){
    //     if(i < word1.length){
    //         str += word1[i]
    //     }
    //     if(i < word2.length){
    //         str += word2[i]
    //     }
    //     i++
    // }
    return str
};
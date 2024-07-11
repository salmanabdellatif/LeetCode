/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let chars = 'balon'
    let nums = [0,0,0,0,0]

    for(let i = 0; i<text.length; i++){
        if(chars.indexOf(text[i]) !== -1){
            nums[chars.indexOf(text[i])]++ 
        }
    }
    nums[2] = Math.floor(nums[2] / 2) 
    nums[3] = Math.floor(nums[3] / 2) 
    

    return Math.min(...nums);
};
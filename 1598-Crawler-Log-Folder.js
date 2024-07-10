/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let counter = 0
    let i = 0
    while(i < logs.length){
        if(logs[i] === '../'){
            counter--
            counter = counter < 0 ? 0 : counter
        }else if(logs[i] === './'){
        }else{
            counter++
        }
        i++
    }
    return counter
};
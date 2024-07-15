/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let empty = 0
    let totalDrinked = 0
    while(numBottles){
        numBottles--
        empty++
        totalDrinked++
        if(empty >= numExchange){
            empty -= numExchange
            numBottles++
        }
    }
    return totalDrinked
};
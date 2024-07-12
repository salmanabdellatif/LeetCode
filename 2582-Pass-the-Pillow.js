/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let pillowAt = 1
    let direction = 1
    while(time){
        if(direction){
            pillowAt++
        }else{
            pillowAt--
        }
        if(pillowAt === n){
            direction = 0
        }else if(pillowAt === 1){
            direction = 1
        }
        time--
    }
    return pillowAt
};
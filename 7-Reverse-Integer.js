/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0
    if(x<0){
        res = -1 * parseInt(x.toString().split('').splice(1).reverse().join(''))
    }else{
        res = parseInt(x.toString().split('').reverse().join(''))
    }
    if(res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1){
        return 0
    }
    return res
};
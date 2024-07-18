/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        if(!functions.length){
            return x
        }
        let i = functions.length - 1
        while(i){
            x = functions[i--](x)
        }
        return functions[i](x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
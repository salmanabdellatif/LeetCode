/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    function getMappedVal(num){
        if(num === 0) return mapping[0]
        let mappedVal = ''
        while(num>0){
            mappedVal = mapping[num % 10] + mappedVal
            num = Math.floor(num / 10)
        }
        return parseInt(mappedVal)
    }
    let mappedNums = nums.map(num=>[num, getMappedVal(num)])
    mappedNums.sort((a,b)=>a[1]-b[1])
    return mappedNums.map(num=>num[0])
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b)
    nums2.sort((a,b)=>a-b)
    let intersec = []
    let i = 0, j = 0
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            i++
        }else if(nums1[i] > nums2[j]){
            j++
        }else{
            intersec.push(nums1[i])
            i++
            j++
        }
    }
    // let intersec = []
    // let map = new Map()

    // let i = 0
    // while(i < nums1.length){
    //     map.set(nums1[i], (map.get(nums1[i])||0) + 1)
    //     i++
    // }

    // let j = 0
    // while(j < nums2.length){
    //     if(map.get(nums2[j]) > 0){
    //         intersec.push(nums2[j])
    //         map.set(nums2[j], map.get(nums2[j]) - 1)
    //     }
    //     j++
    // }
    return intersec
};
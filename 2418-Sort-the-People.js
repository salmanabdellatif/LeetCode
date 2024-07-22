/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
// var sortPeople = function(names, heights) {
//     let res = []
//     while(names.length){
//         let tallestIndex = heights.indexOf(Math.max(...heights))
//         res.push(names[tallestIndex])
//         names.splice(tallestIndex, 1)
//         heights.splice(tallestIndex, 1)
//     }
//     return res
// };
var sortPeople = function(names, heights) {
    let res = names.map((name, index)=> ({name, height: heights[index]}))
    res.sort((a,b)=>b.height - a.height)
    return res.map((person)=>person.name)
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    let nodes = new Map()
    let childSet = new Set()

    for(let [parent, child, isLeft] of descriptions){
        if(!nodes.has(parent)){
            nodes.set(parent, new TreeNode(parent))
        }
        if(!nodes.has(child)){
            nodes.set(child, new TreeNode(child))
        }
        if(isLeft){
            nodes.get(parent).left = nodes.get(child)
        }else{
            nodes.get(parent).right = nodes.get(child)
        }
        childSet.add(child)
    }
    let root = null
    for(let [parent] of descriptions){
        if(!childSet.has(parent)){
            root = nodes.get(parent)
            break
        }
    }
    

    return root
};
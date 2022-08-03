/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let runner = root;
    while(runner){
        if(p.val > runner.val && q.val > runner.val){
            runner = runner.right;
        }
        else if(p.val < runner.val && q.val < runner.val){
            runner = runner.left;
        }
        else{
            return runner;
        }
    }
};
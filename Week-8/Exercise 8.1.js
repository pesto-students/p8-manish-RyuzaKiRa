/* 
 * Problem 8.1: Maximum Depth of Binary Tree
 * Given the root of a binary tree, return its maximum depth.A binary tree's maximum depth is the number of nodes along 
 * the longest path from theroot node down to the farthest leaf node.
 *     3
 *   /   \
 *  9    20
 *     /    \
 *    15     7
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 * 
 * Example 2:
 * Input: root = [1,null,2]
 * Output: 2
 * 
 * Constraints:
 * ●The number of nodes in the tree is in the range [0, 104].
 * ●100 <= Node.val <= 100
 */

/* Solution */

class Tree {
    constructor() {
        this.root = null;
        this.left = null;
        this.right = null;
    }
}

function createTree(arr, i) {
    let tree = new Tree(arr);
    if (arr[i] == null) {
        return null;
    }
    tree.root = arr[i];
    tree.left = createTree(arr, 2*i +1);
    tree.right = createTree(arr, 2*i +2);
    return tree;
}

function maxDepthOfTree(tree) {
    let countLeft = 1;
    let countRight = 1;
    if (tree.left != null) {
        countLeft = 1 + maxDepthOfTree(tree.left);
    }
    if (tree.right != null) {
        countRight = 1 + maxDepthOfTree(tree.right);
    }
    return countLeft > countRight ? countLeft : countRight;
}

function maxDepth(root) {
    return maxDepthOfTree(createTree(root, 0));
};

console.log(maxDepth([3,9,20,null,null,15,7]));

console.log(maxDepth([1,null,2]));

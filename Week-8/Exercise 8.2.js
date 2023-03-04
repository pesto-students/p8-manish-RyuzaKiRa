/* 
 * Problem 8.2 : Validate a Binary Tree
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).A valid BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains
 * only nodes with keys greater than the node's key. Boththe left and right subtrees must also be binary search trees.
 * 
 * Example 1:
 *    2
 *  /   \
 * 1     3
 * 
 * Input: root = [2,1,3]
 * Output: true
 * 
 * Example 2:
 *       5
 *     /   \
 *    1     4
 *        /   \
 *       3     6
 * Input: root = [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is 4.
 * 
 * Constraints:
 * ●The number of nodes in the tree is in the range [1, 104].
 * ●231<= Node.val <= 2^31- 1
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

function validateBinarySearchTree(tree) {
    if (tree.left != null) {
        if (tree.root < tree.left.root) {
            return false;
        }
        validateBinarySearchTree(tree.left);
    }
    if (tree.right != null) {
        if (tree.root > tree.right.root) {
            return false;
        }
        validateBinarySearchTree(tree.right);
    }
    return;
}

function validateBST(arr) {
    let isValidBst = validateBinarySearchTree(createTree(arr,0));
    return isValidBst ?? true;
}

console.log(validateBST([2,1,3]));

console.log(validateBST([5,1,4,null,null,3,6]));
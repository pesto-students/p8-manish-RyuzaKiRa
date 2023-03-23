/* 
 * Problem 8.3: Binary Tree Level Order Traversal
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e.,from left to right,
 * level by level).
 * 
 * Example 1:
 *      3
 *    /   \
 *  9     20
 *      /    \
 *     15     7
 * 
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 * 
 * Example 2:
 * Input: root = [1]
 * Output: [[1]]
 * 
 * Example 3:
 * Input: root = []
 * Output: []
 * 
 * Constraints:
 * ●The number of nodes in the tree is in the range [0, 2000].
 * ●-1000 <= Node.val <= 1000
 */

/* Solution */

const Queue = require("./Queue");

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

function levelOrderTraversal(tree) {
    const queue = new Queue();
    queue.enqueue(tree);
    while (!queue.isEmpty()) {
        let temp = queue.dequeue();
        if (temp.left != null) {
            queue.enqueue(temp.left);
        }
        if (temp.right != null) {
            queue.enqueue(temp.right);
        }
        console.log(temp.root);
    }
}

function levelOrderTraversal_2(tree) {
    let levelArray = [];
    const queue = new Queue();
    if (tree === null) {
        return levelArray;
    }
    queue.enqueue(tree);
    while (!queue.isEmpty()) {
        let level = [];
        let length = queue.length();
        for (let i = 0; i < length; i++) {
            let temp = queue.dequeue();
            level.push(temp.root);
            if (temp.left != null) {
                queue.enqueue(temp.left);
            }
            if (temp.right != null) {
                queue.enqueue(temp.right);
            }
        }
        levelArray.push(level);
    }
    return levelArray;
}

function LOT(root) {
    return levelOrderTraversal_2(createTree(root,0));
}

// LOT([3,9,20,null,null,15,7]);

console.log(...LOT([3,9,20,8,19,15,7]));
console.log(...LOT([3,9,20,null,null,15,7]));
console.log(...LOT([1]));
console.log(LOT([]));
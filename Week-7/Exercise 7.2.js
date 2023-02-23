/* 
 * Problem 7.2: Rotate Linked List
 * Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,where
 * k is a given positive integer smaller than or equal to length of the linked list.
 * 
 * Example 1:
 * Input: 
 * N = 5
 * value[] = {2, 4, 7, 8, 9}
 * k = 3
 * Output: 8 9 2 4 7
 * Explanation:
 *  Rotate 1: 4 -> 7 -> 8 -> 9 -> 2
 *  Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
 *  Rotate 3: 8 -> 9 -> 2 -> 4 -> 7
 * 
 * Example 2:
 * Input:
 * N = 8
 * value[] = {1, 2, 3, 4, 5, 6, 7, 8}
 * k = 4
 * Output: 5 6 7 8 1 2 3 4
 * 
 * Expected Time Complexity: O(N).
 * Expected Auxiliary Space: O(1).
 * Constraints: 1 <= N <= 103 1 <= k <= N
 */

/* Solution */

var head;

class Node {
    constructor(node) {
        this.data = node;
        this.next = null;
    }
}

function printList(node) {
    let ll = [];
    while (node != null) {
        ll.push(node.data);
        ll.push('->')
        node = node.next;
    }
    ll.push('NULL');
    console.log(...ll);
}

function createLL(arr){
    let newNode = new Node(arr[0]);
    let [, ...arrRest] = arr;
    if(arrRest.length !== 0){
        newNode.next = createLL(arrRest);
    }
    return newNode;
}

function rotateLL(node, k){
    let i = 0;
    let currentNode = node;
    while(currentNode != null && i != k-1){
        currentNode = currentNode.next;
        i++;
    }
    let kthNode = currentNode;
    while(currentNode.next != null){
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    let head = kthNode.next;
    kthNode.next = null;
    return head;
}



let value = [2, 4, 7, 8, 9];
head = createLL(value);
console.log("Before Rotation:-");
printList(head);
let rotatedList = rotateLL(head, 3);
console.log("After Rotation:-");
printList(rotatedList);




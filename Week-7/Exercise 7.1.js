/* 
 * Problem 7.1 : Reverse the Linked list
 * Given a linked list of N nodes. The task is to reverse this list.
 * 
 * Example 1:
 * Input:LinkedList: 1->2->3->4->5->6
 * Output: 6 5 4 3 2 1
 * Explanation: After reversing the list,elements are 6->5->4->3->2->1.
 * 
 * Example 2:
 * Input:LinkedList: 2->7->8->9->10
 * Output: 10 9 8 7 2
 * Explanation: After reversing the list,elements are 10->9->8->7->2.
 * 
 * Expected Time Complexity: O(N). 
 * Expected Auxiliary Space: O(1).
 * Constraints: 1 <= N <= 104
 */

/* Solution */

var head;

class Node {
    constructor(node) {
        this.data = node;
        this.next = null;
        // console.log(this);
    }
}

function reverse(node) {
    var prev = null;
    var current = node;
    var next = null;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    node = prev;
    return node;
}

function printList(node) {
    let ll = [];
    while (node != null) {
        // console.log(node.data + " ");
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

let value = [1, 2, 3, 4, 5];
head = createLL(value);
console.log("Given linked list:");
printList(head);

head = reverse(head);
console.log("Reversed linked list: ");
printList(head);
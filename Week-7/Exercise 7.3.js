/*
 * Problem 7.3: Detect loop in a linked list
 * Given a linked list of N nodes. The task is to check if the linked list has a loop.
 * Linkedlist can contain self loop.
 * 
 * Example 1:
 * Input:
 * N = 3
 * value[] = {1,3,4}
 * x = 2
 * Output: True
 * Explanation: In above test case N = 3.The linked list with nodes N = 3 is given.
 * Then value of x=2 is givenwhich means last node is connected with xth node of linked list.
 * Therefore, there exists a loop.
 * 
 * Example 2:
 * Input:
 * N = 4
 * value[] = {1,8,3,4}
 * x = 0
 * Output: False
 * Explanation: For N = 4 ,x = 0 means then lastNode->next = NULL, then the Linked list
 * does not contains any loop.
 * 
 * Expected Time Complexity: O(N)
 * Expected Auxiliary Space: O(1)
 * Constraints: 1 ≤ N ≤ 104 1 ≤ Data on Node ≤ 103
 */

/* Solution */

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

function isLoopExist(node){
    let ptr1 = node, ptr2 = node.next.next;
    if(ptr1 === ptr2){
        return true;
    }
    while(ptr1 !== ptr2 && ptr2 !== null){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next.next
    }
    if(ptr2 == null){
        return false;
    }
    return true;
}

function createLoop(node, nth){
    let loopStart = loopEnd = node;
    if(nth === 0){
        return;
    }
    let count = 1;
    while(count != nth){
        loopStart = loopStart.next;
        count++
    }
    while(loopEnd.next != null){
        loopEnd = loopEnd.next;
    }
    loopEnd.next = loopStart;
    return node;
}

let value = [1, 3, 4];
let head = createLL(value);
head = createLoop(head, 2);
console.log(isLoopExist(head));

let value2 = [1,8,3,4];
let head2 = createLL(value2);
head2 = createLoop(head2, 2);
console.log(isLoopExist(head2));
/* 
 * Problem 7.6: Implement a Queue using 2 stack
 * Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types:
 *  (i) 1 x (a queryof this type means pushing 'x' into the queue)
 *  (ii) 2 (a query of this type means to popelement from queue and print the poped element)
 * 
 * Example 1:
 * Input:5
 * 1 2 1 3 2 1 4 2
 * Output:2 3
 * Explanation:
 * In the first testcase:
 * 1 2 the queue will be {2}
 * 1 3 the queue will be {2 3}
 * 2 poped element will be 2 the queue will be {3}
 * 1 4 the queue will be {3 4}
 * 2 poped element will be 3.
 * 
 * Example 2:
 * Input:4
 * 1 2 2 2 1 4
 * Output:2 -1
 * Explanation:
 * In the second testcase
 * 1 2 the queue will be {2}
 * 2 poped element will be 2 and then the queue will be empty
 * 2 the queue is empty and hence -1
 * 1 4 the queue will be {4}.
 * 
 * Expected Time Complexity : O(1) for push() and O(N) for pop() or O(N) for push() andO(1) for pop()
 * Expected Auxilliary Space : O(1).
 * Constraints: 1 <= Q <= 100 1 <= x <= 100
 */

/* Solution */

class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.stack.length === 0){
            return;
        }
        return this.stack.pop();
    }

    peek() {
        if (this.stack.length === 0){
            return;
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    print() {
        return this.stack;
    }

    emptyIt() {
        this.stack = [];
    }
}
class Queue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    enqueue(element) {
        this.s1.push(element);
    }

    dequeue() {
        let dequeuedElement;
        if (this.s1.isEmpty() && this.s2.isEmpty()) {
            return;
        }
        else if (this.s2.isEmpty()) {
            while(!this.s1.isEmpty()) {
                this.s2.push(this.s1.pop());
            }
            dequeuedElement = this.s2.pop();
        }
        else {
            dequeuedElement = this.s2.pop();
        }
        
        return dequeuedElement;
    }

    peek() {
        let peekedElement;
        if (this.s1.isEmpty() && this.s2.isEmpty()) {
            return;
        }
        else if (this.s2.isEmpty()) {
            while(!this.s1.isEmpty()) {
                this.s2.push(this.s1.pop());
            }
            peekedElement = this.s2.peek();
        }
        else {
            peekedElement = this.s2.peek();
        }

        return peekedElement;
    }

    isEmpty() {
        return this.s1.isEmpty()
    }

    printQueue() {
        let temp_s2 = [...this.s2.print()];
        console.log('FRONT -> ', ...temp_s2.reverse(), ...this.s1.print(), ' <- REAR');
    }
}

function Query(n, arr) {
    let i = 0;
    let queue = new Queue();
    while(n != 0) {
        if (arr[i] == 1) {
            i++;
            queue.enqueue(arr[i]);
        } else if (arr[i] == 2) {
            queue.dequeue();
        }
        i++;
        n--;
    }
    queue.printQueue();

}

Query(5,[..."12132142"]);
Query(4,[..."122214"]);
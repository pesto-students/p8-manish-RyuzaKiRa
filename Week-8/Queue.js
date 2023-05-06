const Stack = require("./Stack");

/**
 * Queue implementation using 2 stacks.
 */
class Queue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    /**
     * Add an element to the rear.
     */
    enqueue(element) {
        this.s1.push(element);
    }

    /**
     * Removes the element from the front and returns it.
     * If the Queue is empty, undefined is returned.
     */
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

    /**
     * Returns the element in the front of the Queue.
     * If the Queue is empty, undefined is returned.
     */
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

    /**
     * Returns true if the Queue is empty, else return false
     */
    isEmpty() {
        return this.s1.isEmpty() && this.s2.isEmpty();
    }

    /**
     * Returns length of the queue
     */
    length() {
        return this.s1.size() + this.s2.size();
    }

    /**
     * Prints all the value in the queue from front to rear.
     */
    printQueue() {
        let temp_s2 = [...this.s2.print()];
        console.log('FRONT -> ', ...temp_s2.reverse(), ...this.s1.print(), ' <- REAR');
    }
}

module.exports = Queue;
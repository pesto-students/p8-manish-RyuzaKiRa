/* Stack Implmentation */

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

    size() {
        return this.stack.length;
    }

    print() {
        return this.stack;
    }

    emptyIt() {
        this.stack = [];
    }
}

module.exports = Stack;
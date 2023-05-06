/*
 * Q3.4. Refactor the above stack implementation, using the concept of closure, such that there is noway to access
 * items array outside of createStack() function scope.
 */

function createStack() {
    return {
        items: [],
        push(item) {
            this.items.push(item);
        },
        pop() {
            return this.items.pop();
        }
    };
};

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => [10]
stack.items= [10,100,1000];// Encapsulationbroken!

// Solution Starts here

const createStack2 = () => {
    let items = [];
    return ({
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    });
};

const stack2 = createStack2();
stack2.push(10);
stack2.push(5);
stack2.pop();// => 5
console.log(stack2.items);// => undefined

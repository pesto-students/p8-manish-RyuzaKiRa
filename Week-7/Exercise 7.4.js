/* 
 * Problem 7.4: Parenthesis Checker
 * Given an expression string x. Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in
 * exp.For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.
 * 
 * Example 1:
 * Input:{([])}
 * Output:true
 * Explanation:{ ( [ ] ) }. Same colored brackets can form balaced pairs, with 0 number of unbalanced bracket.
 * 
 * Example 2:
 * Input:()
 * Output:true
 * Explanation:(). Same bracket can form balanced pairs, and here only 1 type of bracket is present and
 * in balancedway.
 * 
 * Example 3:
 * Input:([]
 * Output:false
 * Explanation:([]. Here square bracket is balanced but the small bracket is not balanced and
 * Hence , the output will be unbalanced
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
            throw new Error("Stack Underflow!");
        }
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    print() {
        console.log(...this.stack, '<- TOP');
    }

    emptyIt() {
        this.stack = [];
    }
}

let stack = new Stack();

function parenthesisChecker(exp) {

    [...exp].forEach(ele => {
        if (ele === '(' || ele === '{' | ele === '[') {
            stack.push(ele);
        }
        else {
            if ((ele === ')' && stack.peek() === '(' ) || (ele === '}' && stack.peek() === '{' ) || (ele === ']' && stack.peek() === '[' )) {
                stack.pop();
            }
        }
    });
    if(stack.isEmpty()) {
        return true;
    }
    else {
        stack.emptyIt();
        return false;
    }
}

let cases = ["{([])}", "([]", "()", "[(])", "[()]{}{()()}"];

cases.forEach((ith_case) => {
    console.log(`${ith_case} - ${parenthesisChecker(ith_case)}`);
});

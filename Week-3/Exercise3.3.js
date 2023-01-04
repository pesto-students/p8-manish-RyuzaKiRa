/*
 * Q3.3. What is the output of the below code and why?
 */

function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message=`Count is ${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}

const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?

/*
 * Output: log() will give an output "Count is 0".
 * Reason: This is because when the function "createIncrement" was called, the message string value was already
 * set in the function scope, therefore when the log function was called it searched for the message variable
 * which was not present in it's scope so it then searched throught it's parent's scope, where the message was
 * found and it's value was already set, so all the 3 increment() function calls didn't affected, it's value.
 */

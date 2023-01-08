/* 
 * Q. Implement Fibonacci Series with Iterators
 * Sample output:
 * The Fibonacci Series is:
 * 0
 * 1
 * 1
 * 2
 * 3
 * 5
 * 8
 */

const fib = (n) => ({
    [Symbol.iterator]: () => {
        let i = 1;
        let a = 0, b = 0;
        return {
            next: () => {
                if (i++ < n) {
                    [a, b] = [b, (a + b) || 1];
                    return { value: a, done: false };
                }
                else {
                    return { done: true };
                }

            }

        }

    }
});

console.log("The Fibonacci Series is:");
for (let i of fib(8))
{
    console.log(i);
}
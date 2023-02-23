/* 
 * Q3.1 Create a memoize function that remembers previous inputs and stores them in cache so that itwon’t have
 * to compute the same inputs more than once. The function will take an unspecifiednumber of integer inputs
 * and a reducer method
*/

function add(a,b){
    return (a+b);
}

function memoize(fn){
    const memory = new Map();
    return (function(...args){
        const key = args.toString();
        if(memory.has(key)){
            console.log("For key", key, "Output was not computed.");
            return memory.get(key);
        }
        console.log("For key", key, "Output was computed.");
        memory.set(key, fn(...args));
        return memory.get(key);
    });
}

const memoizeAdd = memoize(add);

memoizeAdd(100,100);//gets computed and returns 200
memoizeAdd(100);//gets computed and returns 100
memoizeAdd(100,200);//gets computed and returns 300
memoizeAdd(100,100);//returns 200 without computing

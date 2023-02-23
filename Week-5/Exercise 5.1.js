/*
 * Q. Using Async/Await and Generators, create separate functions and achieve the same functionality.
 * Execute 3 callback functions asynchronously, for example doTask1(), doTask2() and doTask3().
 */

// Generates a random of given no of digits.
function randomNumber(digit){
    let i = 0, digitCount = 1;
    while(i<digit){
        digitCount*=10;
        i++;
    }
    const randomNumber = Math.round(Math.random()*digitCount);
    return randomNumber;
}

// logs 1 digit random number
async function doTask1(){
    const promise1 = new Promise((resolve, reject) => {
        let randomTime = randomNumber(3);
        setTimeout(() => {
            resolve(`${randomNumber(1)} is the randomly generated number for doTask1 in in random time ${randomTime}`);
        }, randomTime);
    });

    /*const response = */await promise1.then((x) => {
        console.log(x);
        return x;
    });
    //return response;
}

// logs a 2 digit random number
async function doTask2(){
    const promise2 = new Promise((resolve, reject) => {
        let randomTime = randomNumber(3);
        setTimeout(() => {
            resolve(`${randomNumber(2)} is the randomly generated number for doTask2 in in random time ${randomTime}`);
        }, randomTime);
    });

    /*const response = */await promise2.then((x) => {
        console.log(x);
        return x;
    });
    //return response;
}

// logs a 3 digit random number
async function doTask3(){
    const promise3 = new Promise((resolve, reject) => {
        let randomTime = randomNumber(3);
        setTimeout(() => {
            resolve(`${randomNumber(3)} is the randomly generated number for doTask3 in in random time ${randomTime}`);
        }, randomTime);
    });

    /*const response = */await promise3.then((x) => {
        console.log(x);
        return x;
    });
    //return response;
}

// All the 3 functions start at the same time but stop at any random time.
Promise.all([doTask1(), doTask2(), doTask3()]);

// Generator to perform the same functionailty but will work in order.
function* doTaskGenerator(){
    console.log("doTask1 started!");
    let randomTime1 = randomNumber(3);
    yield setTimeout(() => {
        console.log(`${randomNumber(1)} is the randomly generated number for doGenTask1 in in random time ${randomTime1}`);
    }, randomTime1);

    console.log("doTask2 started!");
    let randomTime2 = randomNumber(3);
    yield setTimeout(() => {
        console.log(`${randomNumber(2)} is the randomly generated number for doGenTask2 in in random time ${randomTime2}`);
    }, randomTime2);

    console.log("doTask3 started!");
    let randomTime3 = randomNumber(3);
    yield setTimeout(() => {
        console.log(`${randomNumber(3)} is the randomly generated number for doGenTask3 in in random time ${randomTime3}`);
    }, randomTime3);
}

const doTastGen = doTaskGenerator();

while(!doTastGen.next().done){
    doTastGen.next();
}
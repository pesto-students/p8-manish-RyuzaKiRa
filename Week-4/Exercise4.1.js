/*
 * Q. Implement a function named getNumber which generates a random number. If randomNumber is divisible by 5 it
 * will reject the promise else it will resolve the promise. Let’s also keep thepromise resolution/rejection
 * time as a variable.
 */

function getNumber(){
    const randomNumber = Math.round(Math.random()*100);
    return randomNumber;
}

// By Class
class customPromise {
    constructor(promiseLogic) {
        this.promise = "pending";
        this.value = null;


        const resolve = value => {
            if (this.promise === "pending") {
                this.promise = "fulfilled";
                this.value = value;
                //return this.value;
            }
        }

        const reject = value => {
            if (this.promise === "pending") {
                this.promise = "rejected";
                this.value = value;
                //return this.value;
            }
        }
        promiseLogic(resolve, reject);
    }

    
    then(onFulfilled, onRejected){
      if(this.promise === "fulfilled"){
         return onFulfilled(this.value);
      }
      if(this.promise === "rejected"){
          return onRejected(this.value);
      }
    }
}

// By Function
function customPromise2(promiseLogic) {
    // constructor(promiseLogic) {
        this.promise = "pending";
        this.value = null;


        const resolve = value => {
            if (this.promise === "pending") {
                this.promise = "fulfilled";
                this.value = value;
                //return this.value;
            }
        }

        const reject = value => {
            if (this.promise === "pending") {
                this.promise = "rejected";
                this.value = value;
                //return this.value;
            }
        }
        promiseLogic(resolve, reject);
    // }

    
    return {
        then: (onFulfilled, onRejected) => {
            if (this.promise === "fulfilled") {
                return onFulfilled(this.value);
            }
            if (this.promise === "rejected") {
                return onRejected(this.value);
            }
        }
    }
    
}

//console.log(getNumber());
const myPromise = new customPromise((resolve, reject) => {
    const randomNumber = getNumber();
    const isDivisibleBy5 = randomNumber % 5 == 0? true : false;
    if(isDivisibleBy5){
        reject(`x = ${randomNumber}, thus Promise Rejected!`);
    }
    resolve(`x = ${randomNumber}, thus Promise Fulfilled!`);
});
myPromise.then(
    (x) => console.log(x),
    (x) => console.log(x)
);

//console.log(getNumber());
const myPromise2 = new customPromise2((resolve, reject) => {
    const randomNumber = getNumber();
    //const isDivisibleBy5 = randomNumber % 5 == 0? true : false;
    if(!!!(randomNumber % 5)){
        return reject(`x = ${randomNumber}, thus Promise Rejected!`);
    }
    return resolve(`x = ${randomNumber}, thus Promise Fulfilled!`);
});
myPromise2.then(
    (x) => console.log(x),
    (x) => console.log(x)
);

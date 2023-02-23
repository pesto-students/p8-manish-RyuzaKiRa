/*
 * Q. Write a function called hasDuplicate which accepts an array and returns true or false if that array
 * contains a duplicate.
*/

function hasDuplicate(arr){
    const arrSet = new Set(arr);
    if(arrSet.size === arr.length){
        return 0;
    }
    return Math.abs(arrSet.size - arr.length);
}

console.log(`Array [1, 2, 3, 4, 5] has ${hasDuplicate([1,2,3,4,5])} duplicates`);
console.log(`Array [1, 2, 1, 4, 5] has ${hasDuplicate([1,2,1,4,5])} duplicates`);
console.log(`Array [1, 2, 3, 4, 2, 4] has ${hasDuplicate([1,2,3,4,2,4])} duplicates`);

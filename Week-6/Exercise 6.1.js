/*
 * Problem 6.1: Max Sum Contiguous Subarray
 * Find the contiguous subarray within an array, A of length N which has the largest sum.
 * 
 * Input Format:
 * The first and the only argument contains an integer array, A. Output Format: Return an integer
 * representing the maximum possible sum of the contiguous subarray.
 * Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000
 * 
 * For example:
 * Input 1: A = [1, 2, 3, 4, -10]
 * Output 1: 10
 * Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.
 * 
 * Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * Output 2: 6
 * Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6.
 */

// Solution

// Simple approach
function maxArray(arr){
    let maxSum = -1e6;

for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j=i; j < arr.length; j++){
        currentSum += arr[j];
        if (currentSum > maxSum){
            maxSum = currentSum;
        }
    }
 }
 return maxSum;
}


// Efficient Approach
function maxArray1(arr){
    let maxSum = -1e6;
    let currentSum = 0;

    arr.forEach(e => {
        currentSum += e;
        if (currentSum > maxSum)
            maxSum = currentSum;
        if (currentSum < 0)
            currentSum = 0;
    });
    return maxSum;
}

console.log(maxArray([1, 2, 3, 4, -10]));
console.log(maxArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

console.log(maxArray1([1, 2, 3, 4, -10]));
console.log(maxArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]));



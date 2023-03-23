/*
 * Problem 6.6 : 3 sum
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number,
 * target. Return the sum of the three integers. Assume that there will only be one solution
 * 
 * Example: 
 * given array S = {-1 2 1 -4}, and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)
 * 
 * Assignment Introduction:
 *  ●Calculate the time and space complexity for the set of questions
 *  ●A set of  Problem statement based on array that would help student how to iterate and process 
 *   an array
 * 
 * Benchmarks:
 *  ●All the problem should have an optimize solutions
 *  ●All the problem statement should have the time and space complexity mention inthe code comment
 *  ●The code should be readable and must follow good coding practice.
 *  ●Keep the code as modular as you can.
 */

//Solution

function threeSum(arr,n){
    let closeSum = Infinity;
    for (let i = 0; i < arr.length - 2; i++){
		for (let j = i + 1; j < arr.length - 1; j++){
			for (let k = j + 1; k < arr.length; k++){
				let currentSum = arr[i] + arr[j] + arr[k];
                if(Math.abs(currentSum - n) < Math.abs(closeSum - n)){
                    closeSum = currentSum;
                }
			}
		}
	}
    console.log(closeSum);
}
//TC: O(n^3)
//SC: O(1)

threeSum([-1, 2, 1, -4], 1);
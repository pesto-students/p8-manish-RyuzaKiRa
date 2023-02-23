/*
 * Problem 6.3 Sort array of 0's,1's and 2's
 * Given an array of size N containing only 0s, 1s, and 2s, Sort the array in ascending order.
 * 
 * Example 1:
 * Input:N = 5
 * arr[]= {0 2 1 2 0}
 * Output:0 0 1 2 2
 * 
 * Example 2:
 * Input:N = 3
 * arr[] = {0 1 0}
 * Output:0 0 1
 * 
 * Expected Time Complexity: O(N)
 * Expected Auxiliary Space: O(1)
 */

//Solution

function sort_zero_one_two(arr) {
    //Space complexity can be reduced to O(1) if we modify the same array, but we should avoid modification of function parameters.
    let arr_copy = [];
    let count_0 = 0, count_1 = 0, count_2 = 0;
    for( let i of arr) {
        switch (i) {
            case 0: count_0++;
                break;
            case 1: count_1++;
                break;
            case 2: count_2++;
                break;
            default:
                break;
        }
    }

    for(let i = 0; i< arr.length; i++) {
        if(count_0) {
            arr_copy[i] = 0;
            count_0--;
        }
        else if(count_1) {
            arr_copy[i] = 1;
            count_1--;
        }
        else {
            arr_copy[i] = 2;
            count_2--;
        }
    }
    console.log("Before Sort - ",arr);
    console.log("After Fort - ", arr_copy);
}
//TC: O(n)
//SC: O(1) if arr_copy is not used

function sort_zero_one_two_2(arr){
    let ptr1 = 0, ptr2 = 0, ptr3 = arr.length - 1;
    console.log("Before Sort - ",arr);
    while(ptr2 <= ptr3){
        if(arr[ptr2] === 0){
            [arr[ptr1], arr[ptr2]] = [arr[ptr2], arr[ptr1]];
            ptr1++;
            ptr2++;
        }else if(arr[ptr2] === 2){
            [arr[ptr2], arr[ptr3]] = [arr[ptr3], arr[ptr2]];
            ptr2++;
            ptr3--;
        }else{
            ptr2++;
        }
    }
    console.log("After Fort - ", arr);
}
//TC: O(n)
//SC: O(1)

const arr = [0, 2, 1, 2, 0];
const arr2 = [0, 1, 0];

sort_zero_one_two(arr);
sort_zero_one_two(arr2);
console.log("////////");
sort_zero_one_two_2(arr);
sort_zero_one_two_2(arr2);

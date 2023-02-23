/*
 * Problem 6.2 Spiral Order Matrix II
 * Problem Description Given a matrix of m * n elements (m rows, n columns), return all elements of the
 * matrix in spiral order.
 * 
 * Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
 * You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

// Solution

function spiralMatrix(matrix){
    let m = matrix.length;
    let n = matrix[0].length;
    let spiral = [];
    let i, k = 0, l = 0;
    while (k < m && l < n){
        for(i = 0; i < n; ++i){
            spiral.push(matrix[k][i]);
        }
        k++;
        
        for(i = k; i < m; ++i){
            spiral.push(matrix[i][n - 1]);
        }
        n--;

        if(k < m){
            for(i = n - 1; i >= 0; --i){
                spiral.push(matrix[m-1][i]);
            }
            m--;
        }

        if(l < n){
            for(i = m - 1; i >= k; --i){
                spiral.push(matrix[i][n - 1]);
            }
            l++;
        }
    }
    console.log(...spiral);
}
//TC: O(n^2)
//SC: O(n)

let arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];

spiralMatrix(arr);
/*
 * Problem 10.6: All Path from source to target
 * Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possiblepaths from node 0 to
 * node n - 1 and return them in any order.The graph is given as follows: graph[i] is a list of all nodes you can
 * visit from node i (i.e.,there is a directed edge from node i to node graph[i][j]).
 * 
 * Example 1:
 *  0 -------> 1
 *  |          |
 *  |          |
 *  ↓          ↓
 *  2 -------> 3
 * 
 * Input: graph = [[1,2],[3],[3],[]]
 * Output: [[0,1,3],[0,2,3]]
 * Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
 * 
 * Example 2:
 *                          
 *       .----------------.
 *       |                |
 *       |       0 -----> 1 
 *       |    ↙    ↘︎   ↙    ↘︎
 *       '-->4<------3<-------2  
 * 
 * Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
 * Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
 * 
 * Constraints:
 *  ●n == graph.length
 *  ●2 <= n <= 15
 *  ●0 <= graph[i][j] < n
 *  ●graph[i][j] != i (i.e., there will be no self-loops).
 *  ●All the elements of graph[i] are unique.
 *  ●The input graph is guaranteed to be a DAG.
 */

/* Solution */
/**
 * @param {Array[]} arr1 The Array
 * @param {Array} arr2 The Array
 */
function allPaths(arr1, arr2) {
    let result = [];
    if (arr2.length === 0) {
        return -1;
    }
    arr2.forEach(a => {
        let localPath = [a];
        
        let path = allPaths(arr1, arr1[a]);
        if (path !== -1) {
            let localP = [];
            path.forEach(p => {
                let pathFound = localPath.concat(p);
                localP.push(pathFound);
            });
            localPath = localP;
            result = result.concat(localPath);
        }
        else {
            if (a === arr1.length - 1) {
                result.push([a]);
            }
        }
    });
    return result;
}

/**
 * @param {number[][]} arr
 * @return {number[][]}
 */
var allPathsSourceTarget = function(arr) {
    let result = [];
    arr[0].forEach(a => {
        let path = [0];
        path.push(a);
        if (a !== arr.length - 1) {
            let pathFound = allPaths(arr, arr[a]);
            if (pathFound !== -1) {
                pathFound.forEach(p => {
                    result.push(path.concat(p));
                });
            }
        }
        else {
            result.push(path);
        }
    });
    return result;
};

let ans = allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]);
console.log(ans);

let ans2 = allPathsSourceTarget([[4,3,1],[3,2,4],[],[4],[]]);
console.log(ans2);

let ans3 = allPathsSourceTarget([[2],[],[1]]);
console.log(ans3);
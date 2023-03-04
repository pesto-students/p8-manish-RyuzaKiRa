/* 
 * Problem 8.4: Find if Path Exists in Graph
 * There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n -1 (inclusive). The edges in
 * the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge
 * between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
 * 
 * You want to determine if there is a valid path that exists from vertex source to vertex destination.
 * 
 * Given edges and the integers n, source, and destination, return true if there is a validpath from source to destination,
 * or false otherwise.
 * 
 * Example 1:
 * 
 *  0 --- 1
 *    \ /
 *     2
 * Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
 * Output: true
 * Explanation: There are two paths from vertex 0 to vertex 2:- 0 → 1 → 2- 0 → 2
 * 
 * Example 2:
 * 
 *     1       3
 *    /        | \
 *   0         |  5
 *    \        | /
 *     2       4
 * 
 * Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
 * Output: false
 * Explanation: There is no path from vertex 0 to vertex 5.
 * 
 * Constraints:
 * ●1 <= n <= 2 * 105
 * ●0 <= edges.length <= 2 * 105
 * ●edges[i].length == 2
 * ●0 <= ui, vi <= n - 1
 * ●ui != vi
 * ●0 <= source, destination <= n - 1
 * ●There are no duplicate edges. -There are no self edges.
 */

/* Solution */

class Graph {
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v){
        this.AdjList.set(v, []);
    }
    
    addEdge(v, w){
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    printGraph() {
        let get_keys = [...this.AdjList.keys()];

        get_keys.forEach(i => {
            let get_values = [...this.AdjList.get(i)];
            let conc = "";
            get_values.forEach(j => {
                conc += j + " ";
            });
            console.log(i + " -> " + conc);
        });
    }

    isPathExist(v, w) {
        let visited = [];
        const dfs = (s) => {
            let get_values = [...this.AdjList.get(s)];
            if (get_values.includes(w) || s === w) {
                return true;
            }
            visited[s] = true;
            let flag = false;
            get_values.forEach(j => {
                if (!(j in visited)) {
                    flag = flag || dfs(j);
                }
            });
            return flag;
        }
        return dfs(v);
    }
}
/*
  A B C D E F
A 1 1 0 1 0 0
B 1 1 1 0 0 0
C 0 1 1 0 0 0
D 1 0 0 0 0 0
E 0 0 1 0 0 1
F 0 0 1 0 1 0

A->B->C->E->F
*/

const graph = new Graph(6);
let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
// graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
// graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');
 
graph.printGraph();
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C

graph.isPathExist('A', 'F');
/*
Graphs - what is it? Nodes + Connections to those nodes 
    uses for graphs - social netowrks, location / mapping, routing (mev arb)
Essential Graph Terms : 
    Vertex - Node
    Edge - Connection between nodes
Different types of graphs - compare
    Undirected vs Direct Graphs
        Undirected - No direction on an edge - facebook 
        Driected Graph - Represented with arrows - instagram - follow one way 
        Weighted Graph - assign a value to the edges (mev arb?)
Implement a graph using an adjacency list vs matrix
    List can take up less space (in  sparse graphs)
    faster to iterate over all edges
    can be slower to lookup specific edge
    maxtrix takes up more space in sparse graphs 
    slower to iterate over all edges 
    faster to lookup specific edge
    nested array / hash table
    index for a given key - detail which nodes it is connected to (the edges)
    real world data tends to be sparse 
Traverse through the graph - BFS and DFS
Compare traversal
*/

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];// need to handle dupes 
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2) {
        //v1
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );

        //v2
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );

    }
    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(v => {
            this.removeEdge(vertex, v);
        });
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(start){
        const result = [];
        let visited = {};
        console.log(visited);

        let adjacencyList = this.adjacencyList;
        
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(v => {
                if(!visited[v]){
                    return dfs(v);
                }
            });
        })(start);
        return result;
    }
    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertex;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    breathFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertex;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}


let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")


/*

              A
            /   \
           B     C
           |     |
           D-----E 
           \     /
              F

*/

console.log(g)
g.depthFirstRecursive("Aspen");
g.depthFirstRecursive("Aspen");
g.removeVertex("Dallas")
console.log(g)
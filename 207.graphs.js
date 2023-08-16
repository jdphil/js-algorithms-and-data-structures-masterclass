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
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];// need to handle dupes 
    }
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2){
        //v1
        let temp1 = this.adjacencyList[v1];
        for(let i=0;i<temp1.length;i++){
            if(temp1[i]===v2){
                temp1.pop();
            }
        }
        this.adjacencyList[v2] = temp1;

        //v2
        let temp2 = this.adjacencyList[v2];
        for(let i=0;i<temp1.length;i++){
            if(temp2[i]===v1){
                temp2.pop();
            }
        }
        this.adjacencyList[v2] = temp2;
    }
}

let g = new Graph();
g.addVertex("Aspen")
g.addVertex("Tokyo")
g.addVertex("Dallas")
g.addEdge("Dallas","Tokyo")
g.addEdge("Aspen","Dallas")
console.log(g)
g.removeEdge("Dallas","Tokyo")
console.log(g)
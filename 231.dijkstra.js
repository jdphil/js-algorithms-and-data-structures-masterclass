class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];// need to handle dupes 
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;

        //build inital state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex,0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        //as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().value;
            if(smallest === finish){
                console.log(distances);
                console.log(previous);
                //WE ARE DONE
                //BUILD PATH
                
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighbouring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    console.log(nextNode);
                    //calculate new distance to neighbouring node
                    let candidate = distances[smallest] + nextNode.weight;
                    const nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }

        }
        console.log(path.concat(smallest).reverse());
        return path.concat(smallest).reverse();
    }
}


/*Heaps 
heap is a type of tree... we are focused on binary heap 

what is a binary heap? very similar to bst, but different rules
    max binary heap - parent nodes are always larger than child
    min binary heap - parent nodes are always smaller than child 
    parent can only have zero one or two nodes, can not have three hence binary 

    no guaranteeds between the siblings 
compare and contrast min and max heap 
implement basic methods
where are they used in real world? priority queue
*/

/*Representing a heap - can use an array
For any index of an array n... 
The left child is stored at 2n+1
The right child is stored at 2n+2

e.g. parent n=5
left child = 2n+1 = 2*5+1 = 11
right child = 2n+2 = 2*5+2 = 12

can also find parent from child 
n-1/2 floored
*/

class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        function findParent(index) {
            return Math.floor((index - 1) / 2);
        }

        this.values.push(newNode);
        var index = this.values.length - 1;
        var parentIndex = findParent(index);
        const element = this.values[index];
        while (index > 0) {
            var parentIndex = findParent(index);
            //swap
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent
            //update i 
            index = parentIndex;
        }
        return this.values;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = ((2 * idx) + 1);
            let rightChildIdx = ((2 * idx) + 2);
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                 ) {
                    swap = rightChildIdx;
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
    dequeue() {
        if(this.values.length === 1) return this.values.pop();
        var min = this.values[0];
        var end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        return min;



    }
}

//no guaranteed order between siblings

var g = new WeightedGraph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);


console.log(g.adjacencyList);

g.dijkstra("A", "E");

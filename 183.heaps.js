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

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    enqueue(value) {
        function findParent(index) {
            return Math.floor((index - 1) / 2);
        }

        this.values.push(value);
        var index = this.values.length - 1;
        var parentIndex = findParent(index);
        const element = this.values[index];
        while (index > 0) {
            var parentIndex = findParent(index);
            //swap
            let parent = this.values[parentIndex];
            if (element <= parent) break;
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
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
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
    extractMax() {
        if(this.values.length === 1) return this.values.pop();
        var max = this.values[0];
        var end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        return max;



    }
}

var pq = new MaxBinaryHeap();
pq.enqueue(41);
pq.enqueue(39);
pq.enqueue(33);
pq.enqueue(18);
pq.enqueue(27);
pq.enqueue(12);
pq.enqueue(55);
console.log(pq.values);


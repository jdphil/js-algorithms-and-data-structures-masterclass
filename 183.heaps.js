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

class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(value){
        function findParent(index){
            return Math.floor((index-1)/2);
        }

        this.values.push(value);
        var index = this.values.length-1;
        var parentIndex = findParent(index);
        
        while (index > 1 && this.values[parentIndex] < this.values[index]){
            var parentIndex = findParent(index);
            //swap
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = value;
            //update i 
            index = parentIndex;
        }
        return this.values;
    }
}

var mbh = new MaxBinaryHeap();
mbh.insert(100);
mbh.insert(10);
mbh.insert(7);
mbh.insert(65);
mbh.insert(23);
mbh.insert(16);
mbh.insert(22);


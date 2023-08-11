class Node {
    constructor(value){
        this.value = value;
        tthis.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        }
        else{
            var currentNode = this.root;
            while(currentNode){
                if(value < currentNode.value){
                    currentNode = this.root.left;
                }
                else{
                    currentNode = this.root.right;
                }
            }

        }

    }
}


var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left = new Node(9);

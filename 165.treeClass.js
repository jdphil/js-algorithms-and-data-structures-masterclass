class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        var currentNode = this.root;
        while (true){
            if(value === currentNode.value) return undefined;

            if (value > currentNode.value) {
                if (currentNode.right) {
                    currentNode = currentNode.right;
                }
                else {
                    currentNode.right = newNode;
                    return this;
                }
            }
    
            if (value < currentNode.value) {
                if (currentNode.left) {
                    currentNode = currentNode.left;
                }
                else {
                    currentNode.left = newNode;
                    return this;
                }
            }
        }

    }
    find(value){

        if(this.root === null) return false;
        
        if(this.root && this.root.value === value) return true;

        var currentNode = this.root;
        while(true){
            if(value === currentNode.value) return true;

            if (value > currentNode.value) {
                if (currentNode.right) {
                    currentNode = currentNode.right;
                }
                else {
                    return false;
                }
            }
    
            if (value < currentNode.value) {
                if (currentNode.left) {
                    currentNode = currentNode.left;
                }
                else {
                    return false;
                }
            }
        }
    }
}


var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.insert(8)

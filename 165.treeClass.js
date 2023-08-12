//bfs - dfs? :) 
/*
which is better?

depends on the tree

wide - bfs stores nodes in memory in the queue 
deep - dfs does not 

so a lot of child nodes bfs would consume a lot of memory 
simple tree structures bfs might be better (one sided tree) but then why use a tree? 

when for different dfs? 
pre, post in.... 

dfs in order when you use inorder on a bst - the nodes are in order - could be useful
pre order - duplicate a tree - store it in a file and load it in 

*/

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
    bfs(){
        var queue = [];
        var visited = [];
        var deque = this.root;
        queue.push(this.root);
        while(queue.length>0){
            console.log(queue);
            deque = queue.shift()
            visited.push(deque.value);
            console.log(visited);
            if(deque.left){
                queue.push(deque.left)
            }

            if(deque.right){
                queue.push(deque.right);
            }
        }


        return visited;
    }
    dfs_preorder(){
        var vistied = [];
        var current = this.root;

        function traverse(node){
            vistied.push(node.value);
            if(node.left){
                traverse(node.left)
            }
    
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(current);
        return vistied;
    }
    dfs_postorder(){
        var vistied = [];

        function traverse(node){
            
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            vistied.push(node.value);
        }
        traverse(this.root);
        return vistied;
    }
    dfs_inorder(){
        var vistied = [];

        function traverse(node){
            
            if(node.left) traverse(node.left);
            vistied.push(node.value);
            if(node.right) traverse(node.right);
            
        }
        traverse(this.root);
        return vistied;


    }
}


var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.dfs_preorder();
tree.insert(8)



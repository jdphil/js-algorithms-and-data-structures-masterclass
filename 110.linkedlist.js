//What is a linked list?
/*
no indices but nodes, and each node has a value and pointer 
to another node or null (like blockchain)

like a skyscraper without an elevator 
have to take the stairs and go floor by floor 

singly is because it only links to the next node
*/

//piece of data 
// reference to next node - next
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;     
        return this;
    }
    pop(){
        if(this.length===0) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length===0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
console.log(list)
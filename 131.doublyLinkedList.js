//setup two classes node
//val, next, prev
// and doublylinkedlist
//head
//tail
//length

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;

        var currentTail = this.tail;
        

        if(this.length===1){
            this.tail = null;
            this.head = null;
        }else{
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail.prev = null;
        }        
        this.length--;
        return currentTail;
    }
    shift(){
        if(this.length===0) return undefined;
        var oldHead = this.head;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length===0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(){

    }
    set(){

    }
    insert(){

    }
    remove(){

    }
}

var list = new DoublyLinkedList();
list.push(100);
list.push(200);
list.push(300);
console.log(list);
list.pop();
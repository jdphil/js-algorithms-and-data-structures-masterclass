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
    get(index){
        if(index <0 || index >= this.length) return null;
        
        if(index <= this.length/2){
            var counter=0;
            var current = this.head;
            while(counter !== index){
                current = current.next;
                counter++;
            }
        }else{
            var counter=this.length-1;
            var current = this.tail;
            while(counter !== index){
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
    set(index,val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }      
        return false;
    }
    insert(index, val){
        if(index <0 || index >= this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0 ){
            return !!this.unshift(val);
        }

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode
        this.length++;
        return true;
    }
    remove(index){
        if(index <0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        var removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

var list = new DoublyLinkedList();
list.push(100);
list.push(200);
list.push(300);
console.log(list);
list.pop();
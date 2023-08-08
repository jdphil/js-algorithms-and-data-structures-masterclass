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
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {

            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index <0 || index > this.length) return null;
        var count = 0;
        var current = this.head;
        while(count !== index){
            console.log(index, count);
            current = current.next;
            count++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }      
        return false;
    }
    insert(index, val){
        if(index <0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0 ){
            return !!this.unshift(val);
        }

        var newNode = new Node(val);
        var previous = this.get(index-1);
        var currentNext = previous.next;
        newNode.next = currentNext;
        previous.next = newNode;
        this.length++;
        return true;
    }

}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.push("HELLOX");
list.push("GOODBYEX");
list.push("!X");
console.log(list)
list.insert(2, "JONNY")
console.log(list)
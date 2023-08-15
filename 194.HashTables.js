/*
What is a hash table? store a key value pair (so are arrays, but they are strictly numeric)
    hash tables are not strictly numeric
    not ordered
    why should i care?
        every language has a hash table
        speedy
        python = dict
        js = objects, map 
        java, go, scala = map 
        ruby = hash 
Define what a hashing algorith is
Discuss what makes a good hashing algo 
Understanding how collisions occur in a hash table
Handling collisions using separate chaining or linear probing
    separate chaining involves putting the value in a nested array at the hash index
    loop through the nested array to find the key together
    linear probing if there is a collison find the next empty slot 

what is a hash function - converts some data to a fixed length value e.g. a number 
usually one way function - the hash doesnt mean much without the input 


what makes a good hash? 
1. fast
2. distributs uniformly
3. deterministic - same output for same input 
*/

class HashTable {
    constructor(size=4){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i=0; i <Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }
    get(key){
        let index = this._hash(key);
        console.log(index);
        if(this.keyMap[index]){
            //loop though array and look at
            for(let i=0; i<this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i];
                }
            }
        }else{
            return undefined;
        }
    }
    keys(){
        let keysArr = [];
        for(let i=0; i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                //console.log(this.keyMap[i]);
                for(let j=0; j< this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
    
    values(){
        let valuesArr = [];
        for(let i=0; i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                //console.log(this.keyMap[i]);
                for(let j=0; j< this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

let ht = new HashTable(17);
ht.set("pink", 10)
ht.set("oranaged", 6)
ht.set("cyan", 7)
ht.set("jonathan", 39)
ht.set("courtney", 38)
ht.set("wilbur", 7)
ht.set("francesca", 4)
ht.set("henry", 4)
ht.set("francesca", 4)
ht.set("francesca", 4)
ht.set("jonathan", 39)
console.log();

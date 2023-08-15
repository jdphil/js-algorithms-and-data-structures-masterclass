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

function hash (key, arrayLen) {
    let total = 0;
    const WEIRD_PRIME = 8191;
    for (let i=0; i <Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

hash("pink", 10)
hash("oranaged", 10)
hash("cyan", 10)
console.log();

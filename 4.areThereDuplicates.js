function areThereDuplicates() {
    if(arguments.length===0){
        return false;
    } 

    let obj = {};

    for(let x=0; x<arguments.length;x++){
        let arg = arguments[x];

        if(obj[arg]){
            return true;
        }
        else{
            obj[arg]=1;
        }
    }
    return false;
  }

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 
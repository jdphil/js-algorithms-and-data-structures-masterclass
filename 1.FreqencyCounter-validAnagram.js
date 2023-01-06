function validAnagram(word1, word2){
    if(word1.length != word2.length) return false; //good

    let obj1 = {}; //good
    let obj2 = {}; //not needed

    for(let x=0; x < word1.length; x++){
        //could have set a variable for the letter
        obj1[word1[x]] ? obj1[word1[x]]++ : obj1[word1[x]] = 1;
    }
    
    for(let x=0; x < word2.length; x++){
        obj2[word2[x]] ? obj2[word2[x]]++ : obj2[word2[x]] = 1;
    }

    console.log(obj1);
    console.log(obj2);
    
    //check if key is in both obj1 and obj2 and the count is the same
    // check that all properties are equal
    const obj1Properties = Object.getOwnPropertyNames(obj1);
    const obj2Properties = Object.getOwnPropertyNames(obj2);
  
    // check that both objects have the same number of properties
    if (obj1Properties.length !== obj2Properties.length) {
      return false;
    }
 // check that all properties are equal
 for (let i = 0; i < obj1Properties.length; i++) {
    const propertyName = obj1Properties[i];
    if (obj1[propertyName] !== obj2[propertyName]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('redrums','murderm'));
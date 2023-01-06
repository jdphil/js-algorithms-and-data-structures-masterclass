function sameFrequency(num1, num2){
    
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    if(strNum1.length !== strNum2.length) return false;

    let obj1 = {};
    let obj2 = {};

    for(let x=0; x<strNum1.length; x++){
        let digit = strNum1[x];
        obj1[digit] ? obj1[digit]++ : obj1[digit] = 1;
    }

    for(let x=0; x<strNum2.length; x++){
        let digit = strNum2[x];
        obj2[digit] ? obj2[digit]++ : obj2[digit] = 1;
    }

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

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false
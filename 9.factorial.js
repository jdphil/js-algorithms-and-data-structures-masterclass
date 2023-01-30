function factorial(num){
    let result = 0;

    if(num<=1){
        return 1;
    }

    result = num * factorial(num-1);
    console.log(result);
    return result;
}

console.log(factorial(24));
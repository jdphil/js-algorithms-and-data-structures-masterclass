function fib(num){

    if (num <= 2) return 1;
    console.log(num);
    return fib(num-1) + fib(num-2)
}

console.log(fib(10))
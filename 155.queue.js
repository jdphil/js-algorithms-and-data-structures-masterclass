//what is a queue - add and remove - but this is fifo as opposed to lifo for stack 

var q = [];
//push appends to end of the array
q.push("1");
q.push("2");
q.push("3");

//shift removes first item in array
q.shift();
q.shift();
q.shift();

//unshift inserts at start of array
q.unshift("1");
q.unshift("2");
q.unshift("3");

//pop removes from end of array
q.pop();
q.pop();
q.pop();

//no way around performance hit of re-indexing, better to define own queue class 
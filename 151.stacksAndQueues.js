//what is a stack? - A lifo data structure e.g. books, plates stacked up, 
//the last thing added in is the first to be removed
//seen before in recursion - call stack 
//undo  / redo functionality 


//array stack 

var stack = [];
stack.push("google"); //push adds to top 
stack.push("instagram");
stack.push("youtube");

stack.pop(); //pop removes from the top, the last thing added in 


stack.unshift("create file");
stack.unshift("resize file");
stack.unshift("cloned out wrinkle");

stack.shift(); //pop removes from the beggining of array, still lifo

//remove or add to index 0 of array is not efficent 
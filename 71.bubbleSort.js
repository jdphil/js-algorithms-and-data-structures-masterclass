function bubbleSort(arr){
    let noSwaps;
    let count = 0;
    for(var i = arr.length; i >0; i--){
        count++;
        noSwaps = true;
        for(var j =0; j<i - 1;j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                //SWAP
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    console.log('total runs is:',count);
    return arr;
}

console.log(bubbleSort([1,2,3,4,6,7,8,9]));
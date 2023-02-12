function insertionSort(arr){
    for(let i =1; i<arr.length;i++){
        var currentVal = arr[i];
        for(var j = i-1;j>=0 && arr[j]>currentVal;j--){
            console.log(arr,i,j)
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4,6,8]));
function selectionSort(arr){
    let index = 0;
    for(let i=0;i<arr.length;i++){ //good
        let min = arr[i]; //store the index  
        for(let j=i+1;j<arr.length;j++){ //good

            if(arr[j]<min){
                min = arr[j];

                index =  j;

            }
        }

        if(arr[index] != arr[i]){
            console.log(i,index)
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }

    }
    return arr;
}

console.log(selectionSort([34,22,10,19,17]));
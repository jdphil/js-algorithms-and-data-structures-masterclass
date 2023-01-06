function countUniqueValues(arr){
    if(arr.length==0) return 0;
    //setup pointers
    let i = 0;
    let j = 1;

    while(j < arr.length){
        //console.log(`count: ${i}\ni: ${i}\nj: ${j} \n-> ${arr}`);
        if(arr[i]==arr[j]){
            j++;
        }
        else{
            i++;
            arr.splice(i, 0, arr[j])
            j++
        }

    }
    return i+1;
}

console.log(countUniqueValues([-2,-1,-1,0,1]));


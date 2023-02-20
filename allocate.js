function allocate(arr, newNotional, lotSize){
    //newNotional should not be bigger than the sum of the values in group
    let sum = arr.reduce((a, b) => a + b, 0);
    if(newNotional>=sum) return arr;

    //newNotional needs to be bigger than lot size.
    if(newNotional<lotSize) return arr;

    //new notional must be a multiple of lot size
    if(newNotional % lotSize !=0) return arr;

    //simple division
    let unRounded = arr.map(qty=>(qty/sum)*newNotional)

    //round up to lotSize
    let rounded = unRounded.map(x=>Math.round(x/lotSize)*lotSize);

    let roundedSum = rounded.reduce((a, b) => a + b, 0);

    //check if we have a perfect rounding 
    if(roundedSum === newNotional) return rounded;

    let randomIndex = [];

    if(roundedSum > newNotional){
        //we have gone over based on the rounding so need to remove
        let remainder = roundedSum - newNotional;
        let noTimesRemaining = Math.floor(remainder / lotSize);
        for(let x=0; x<noTimesRemaining;x++){
            let index;
            //keep finding a random index that hasn't already been selected
            do {
                index = Math.floor(Math.random() * arr.length);
            }while(randomIndex.includes(index))
            rounded[index] = rounded[index] - lotSize;
            randomIndex.push(index);
        }
        return rounded;
    }

    if(roundedSum < newNotional){
        //we have gone under based on the rounding so need to add
        let remainder = newNotional - roundedSum;
        let noTimesRemaining = Math.floor(remainder / lotSize);
        for(let x=0; x<noTimesRemaining;x++){
            let index;
            //keep finding a random index that hasn't already been selected
            do {
                index = Math.floor(Math.random() * arr.length);
            }while(randomIndex.includes(index))
            rounded[index] = rounded[index] + lotSize;
            randomIndex.push(index);
        }
        return rounded;
    }
    // console.log('newNotional:',newNotional)
    // console.log('rounded:',rounded)
    // console.log('unRounded:',unRounded)

}

/*Lot size 1*/
//greater than allowed
console.log('greater than allowed',allocate([2000000,2000000,2000000], 7000000, 1));
//all the same
console.log('all the same',allocate([2000000,2000000,2000000], 2000000, 1));
//not all the same
console.log('NOT all the same',allocate([2000000,1500000,3000000], 2000000, 1));
//prefect fit
console.log('prefect fit',allocate([2000000,2000000,2000000], 3000000, 1));
//small new notional
console.log('small new notional',allocate([2000000,2000000,2000000], 1, 1));
//percentage
console.log('percentage',allocate([2000000,2000000,2000000], 6000000*0.33333333, 1));


/*Lot size 50000*/
//greater than allowed
console.log('greater than allowed',allocate([2000000,2000000,2000000], 7000000, 50000));
//all the same
console.log('all the same',allocate([2000000,2000000,2000000], 2000000, 50000));
//not all the same
console.log('NOT all the same',allocate([2000000,1500000,3000000], 2000000, 50000));
//prefect fit
console.log('prefect fit',allocate([2000000,2000000,2000000], 3000000, 50000));

//small new notional
console.log('small new notional',allocate([2000000,2000000,2000000], 50000, 50000));


//small new notional
console.log('small new notional',allocate([2000000,2000000,2000000], 100000, 50000));

//small new notional
console.log('small new notional',allocate([2000000,1000000,3000000], 125000, 50000));
function stringSearch(str, val){
    let count = 0;
    for(let x=0; x<str.length; x++){
        for(let y=0; y<val.length;y++){
            if(str[x]!==val[y]) break;
            if(y=val.length-1 && str[x]===val[y]) count++; 
        }
    }
    return count;
}

console.log(stringSearch("sdfdsfdssfomgddsfsdfomgsersr", "omg"))
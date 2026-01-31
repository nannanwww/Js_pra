function compact(array){

    const compacteadArray = [];

    for(let i = 0; i < array.length; i++){
        if(array[i]){
            compacteadArray.push(array[i]);
        }
    }

    return compacteadArray;
}

const compactedValues = compact([0,1,false,2,'',3]);
console.log(compactedValues);

document.getElementById("result").textContent = compactedValues;
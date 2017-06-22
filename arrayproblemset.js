function printReverse(num){
    for(var i=num.length-1;i<num.length;i--){
        console.log(num[i]);
    }

}

function isUniform(num){
    firstElement=num[0];
    for (var i=1;i<num.length;i++){
        if(firstElement!=num[i]){
            return false;

        }
    }
    return true;
}

function sumArray(num){
    var result= 0;
    for (var i=0;i<num.length;i++){


         result= result+num[i];

    }
    return result;
}

function max(num){
    var high=0;
    for(var i=0;i<num.length;i++){
        if(num[i]>high){
            high=num[i];
        }

    }
    return high;
}



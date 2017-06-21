
function isEven(num){
    if (num%2==0){
        return  "true";
    }
    else
    return "false";
}

console.log("------------------------------------------");


function factorial(num) {
    var result =1;
    for (var i = 1; i <= num; i++) {
        result =result * i;

    }
    return result;
}



console.log("-------------------------------------");
function kebabToSnake(input){

    var newStr= (input.replace(/-/g,"_"));
    return newStr;
    }





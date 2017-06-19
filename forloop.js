for (var i=-10;i<=19;i++)
{
    console.log(i);
}

console.log("-------------------------");
console.log("All even numbers");
for (var i=10;i<=40;i+=2){
    console.log(i);
}

console.log("-------------------------");
console.log("All odd numbers");
for (var i=300;i<=333;i+=3){
    console.log(i)
}

console.log("-------------------------");
console.log("All numbers divisible by 5 and 3");
for (var i=5;i<=50;i++){
    if(i%5==0 && i%3==0){
        console.log(i);
    }
}
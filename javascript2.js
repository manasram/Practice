var age= prompt("What is your age?");
if (age<0){
    alert("Negative age");
}

else if (age==="21") {
    alert("Happy 21st Birthday!!");
}

else if (age%3==0) {
    alert("Your age is odd.");
}

else if(age% Math.sqrt(age)===0) {
    alert("Perfect Square");
}
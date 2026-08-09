let degree = prompt("Enter your degree: ");     
if(degree > 90 && degree <= 100){
    alert("Your grade is A");
}
else if(degree > 80 && degree <= 90){
    alert("Your grade is B");
}
else if(degree >= 70 && degree <= 80){
    alert("Your grade is C");
}
else if(degree >= 0 && degree < 70){
    alert("Your grade is F");
}
else{
    alert("Invalid degree entered. Please enter a number between 0 and 100.");
}
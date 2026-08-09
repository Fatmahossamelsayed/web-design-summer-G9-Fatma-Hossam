let degree = prompt("Enter your degree: ");     
if(degree === null || degree.trim() === ""|| isNaN(degree)) {
    alert("null");
} else {
      degree = Number(degree);
    if (degree <0 || degree > 100) {
        alert("Please enter a valid degree between 0 and 100.");
    } else {
        let grade;
        
        if (degree > 90) {
            grade = "A";
        } else if (degree >= 80) {
            grade = "B";
        } else if (degree >= 70) {
            grade = "C";
        } else {
            grade = "F";
        }
        alert("Your grade is: " + grade);
    }
}
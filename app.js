// var dob = new Date("2006-12-19"); 

// var now = new Date();

// var diff = now - dob; 

// var milliseconds = diff;
// var seconds = Math.floor(diff / 1000);
// var minutes = Math.floor(diff / (1000 * 60));
// var hours = Math.floor(diff / (1000 * 60 * 60));
// var days = Math.floor(diff / (1000 * 60 * 60 * 24));
// var months = Math.floor(days / 30);
// var years = Math.floor(months / 12);

// console.log("User Age:");
// console.log(years + " Years");
// console.log(months + " Months");
// console.log(hours + " Hours");
// console.log(minutes + " Minutes");
// console.log(seconds + " Seconds");
// console.log(milliseconds + " Milliseconds");

function calculateAge() {
    
    var birthDateInput = prompt("Enter your birth date (YYYY-MM-DD):");
    
    
    if (!birthDateInput) {
        alert("Please enter a date!");
        return;
    }
    

    var birthDate = new Date(birthDateInput);
    var today = new Date();
    
    
    var years = today.getFullYear() - birthDate.getFullYear();

    var months = today.getMonth() - birthDate.getMonth();
    
    
    var days = today.getDate() - birthDate.getDate();
    

    if (days < 0) {
        months = months - 1;
        days = days + 30;
    }
    
    if (months < 0) {
        years = years - 1;
        months = months + 12;
    }
    
   
    var timeDifference = today.getTime() - birthDate.getTime();
    
   
    var totalSeconds = Math.floor(timeDifference / 1000);
    var seconds = totalSeconds % 60;
    
    
    var totalHours = Math.floor(totalSeconds / 3600);
    var hours = totalHours % 24;
    
   
    var result = "Age: " + years + " Year(s), " + months + " Month(s), " + days + " Day(s), " + hours + " Hour(s), " + seconds + " Second(s)";
    
    
    alert(result);
    document.getElementById("age-result").innerHTML = result;
}


window.onload = function() {
    calculateAge();
};


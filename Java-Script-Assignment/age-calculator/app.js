 var dob = new Date
 ( prompt( "enter your birthdate (YYYY/MM/DD)"));
var now = new Date();

var diff = now - dob; 

var milliseconds = diff;
var seconds = Math.floor(diff / 1000);
var minutes = Math.floor(diff / (1000 * 60));
var hours = Math.floor(diff / (1000 * 60 * 60));
var days = Math.floor(diff / (1000 * 60 * 60 * 24));
var months = Math.floor(days / 30);
var years = Math.floor(months / 12);

console.log("User Age:");
console.log(years + " Years");
console.log(months + " Months");
console.log(hours + " Hours");
console.log(minutes + " Minutes");
console.log(seconds + " Seconds");
console.log(milliseconds + " Milliseconds");




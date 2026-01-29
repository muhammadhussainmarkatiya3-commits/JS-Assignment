// CHAPTER 6-9

var a = 10;

console.log("The value of a is " + a)

var a = 10; ++a
console.log("The value of ++a is " + a)

var a = 10; --a
console.log("The value of a is " + a)

var a = 10;
 a++
console.log("The value of ++a is " + a)

var a = 10; a--
console.log("The value of a is " + a--)

var a = 2, b = 1;

console.log(--a,--a - --b,--a - --b + ++b,--a - --b + ++b + b--,"the result is -1")

 var name = prompt("Enter your name:");
        alert("Hello " + name +  "Welcome!");

var num = prompt("Enter a number for multiplication table")
if (num === "" || num === null) { num = 5; } else { num = parseInt(num); }

console.log("Multiplication table of " + num);
for (var i = 0; i <= 10; i++){console.log(num+"x"+ i + " = " + (num * i) )}

var subject1 = prompt("Ener first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarks = 100;
var marks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":")) || 0;
var marks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":")) || 0;
var marks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":")) || 0;

var percent1 = Math.round((marks1 / totalMarks) * 100);
var percent2 = Math.round((marks2 / totalMarks) * 100);
var percent3 = Math.round((marks3 / totalMarks) * 100);

var totalObtained = marks1 + marks2 + marks3;
var totalMaxMarks = totalMarks * 3;


CHP 9-11

var city = prompt("Enter your city name:");

if(city.toLowerCase()==="karachi") {
    alert("Welcome to the city of lights");
} else {
    alert("Welcome to " + city);
}

var gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am");
} else {
    alert("Good Morning");
}

let color = prompt("Enter traffic signal color:");

if (color == "red") {
    alert("STOP");
} else if (color == "yellow") {
    alert("READY");
} else if (color == "green") {
    alert("GO");
} else {
    alert("Invalid color");
}

let fuel = prompt("Enter remaining fuel in litres:");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

let secretNumber = 7;   // number between 1 and 10
let guess = Number(prompt("Guess the secret number (1 to 10):"));

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong answer");
}

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");

let result;

if (operation === "+") {
    result = num1 + num2;
    console.log("Result:", result);

} else if (operation === "-") {
    result = num1 - num2;
    console.log("Result:", result);

} else if (operation === "*") {
    result = num1 * num2;
    console.log("Result:", result);

} else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
        console.log("Result:", result);
    } else {
        console.log("Error: Division by zero is not allowed");
    }

} else if (operation === "%") {
    if (num2 !== 0) {
        result = num1 % num2;
        console.log("Result:", result);
    } else {
        console.log("Error: Modulus by zero is not allowed");
    }

} else {
    console.log("Invalid operation selected");
}

let input = prompt("Enter a character:");

let ascii = input.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log("The input is a NUMBER");

} else if (ascii >= 65 && ascii <= 90) {
    console.log("The input is an UPPERCASE letter");

} else if (ascii >= 97 && ascii <= 122) {
    console.log("The input is a LOWERCASE letter");

} else {
    console.log("The input is NOT a number or letter");
}

let num1 = parseInt(prompt("Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2) {
    console.log(num1 + " is larger than " + num2);

} else if (num2 > num1) {
    console.log(num2 + " is larger than " + num1);

} else {
    console.log("Both numbers are equal");

let input = prompt("State a number..");
input = Number(input);

if (input > 0) { alert("The number is positive..."); }
else if (input < 0) { alert("The number is negative...."); }
else if (input === 0) { alert("The number is zero... ") }

let ch = prompt("State an alphabet..");
ch = String(ch);

if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
  alert("The alphabet is vowel!")
} else {
  alert("It is not a vowel..");
}


let studentnames=[]

let studentnames = ["zaid", "ali", "ahmed", "umair"];
let studentages = [20, 25, 22, 24];
let boolarray = [true, false, true, false];

let students = ["ALI", "AHMED", "UMAR", "ZAID"]
let scores = [450, 480, 470, 490]
let totalMarks = 500;

for (let i = 0; i < students.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    console.log("Score of " + students[i] + " is " + scores[i] + " percentage: " + percentage + "%");
}

let multiArray = [[], [], []];
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

console.log(matrix);

for (let i = 1; i <= 10;i++)
{console.log(i);}

let num = Number(prompt("Enter the number for multiplication table:"));
for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(num + " x " + i + " = " + result);
}

let firstname = prompt("Enter your first name:")
let lastname = prompt("Enter your lasrt name:")

let fullname = firstname + " " + lastname;
alert("Welcome " + fullname);

let word = "Pakistani";
console.log("The index of 'n' in " + word + " is " + word.indexOf("n"));

let word = "Hello World";
let lastIndex = word.lastIndexOf("l");
console.log("The last index of 'l' in " + word + " is " + lastIndex);

var message =
  "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
console.log(newMessage);

var str = "472";
var num = Number(str);
console.log("Value: " + str);
console.log("Type: " + typeof str);
console.log("Value: " + num);
console.log("Type: " + typeof num);
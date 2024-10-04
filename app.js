// ANS NO: 01
let height = 170;
let newHeight = height + 10;
alert(newHeight);

// ANS NO: 02
let num1 = 50;
let num2 = 30;
let sum = num1 + num2;
alert("The sum of num1 and num2 is: " + sum);

// ANS NO: 03
let numToBeAdded = 20;
let total = numToBeAdded + 0;
alert("The total is: " + total);

// ANS NO: 04
let price = 120;
let tax = price * 0.1;
let totalPrice = price + tax;
alert ("the total price with tax is " + totalPrice);

// ANS NO: 05
let myAddress = "karachi";
alert ("My address is " + myAddress);

// ANS NO: 06
let userName = "fatima";
let userEmail = "fattimahh24@gmail.com";
let userPassword = "xyz...123"
alert("User Information:\nName: " + userName + "\nEmail: " + userEmail + "\nPassword: " + userPassword);

// ANS NO: 07
// let user address = "malir city, karachi";  // This will cause a syntax error
let userAddress = "malir city, karachi";
alert("User address is: " + userAddress);

// ANS NO: 08
let rose = "Floribundas";  // Declaring the variable with lowercase
alert("Value of rose is: " + rose);  // This will work and display "Floribundas"

// alert("Value of Rose: " + Rose);  // This will cause an error because 'Rose' is not defined

// ANS NO: 09
let sumM = 25 + 30;
alert(" Sum of 25 + 30 is: " + sumM);

// ANS NO: 10
// let num1 = 25;
// let num2 = 5;
// let sum = num1 + num2;
// alert("The sum is: " + sum);

// ANS NO: 11
let modulusResult = 27 % 4;
alert("the Reminder is: " +  modulusResult);

// ANS NO: 12
let num = 3;
let newNum = num++;
alert("New value of num is: " + num);
alert ( "the value of newNum is: " + newNum);

// ANS NO: 12
let counter = 10;
counter++;
counter++;
alert("The final value of counter is: " + counter);

// ANS NO: 13
let points = 20;
points--;
++points;
alert("The final value of points is: " + points);

// ANS NO: 14
let number11 = 0;
++number11;
++number11;
++number11;
alert("The final value of number is: " + number11);

// ANS NO: 15
let calculation = (20 % 6) + 4 * 2;
alert("The value of calculation is: " + calculation);

// ANS NO: 16
let expressionValue = (6 + 2) * (5 - 3);
alert("The value of expressionValue is: " + expressionValue);

// ANS NO: 17
let finalTotal = 5 + 6 * 3 - 4 / 2;
alert("The value of finalTotal is: " + finalTotal);

// ANS NO: 18
let number1 = 5;
let number2 = 10;
let answer = number1 + number2 * 2;
alert("The value of answer is: " + answer);

// ANS NO: 19
let userName1 = prompt("what is your name?");
alert( "Hello " + userName1 + "!");

// ANS NO: 20
let age = prompt("what is your age?");
if(age === null){
    alert("No age provided. Please enter your age.");
}
else{
    alert("You are " + age + " years old!");
}

// ANS NO: 21
let pets = prompt( " How many pets do you have? ");
if ( pets === "" ){
    alert("You didn't enter anything.");

}
else {
    alert("you have " + pets + " pets");
}

// ANS NO: 22
let userInput = prompt("Enter a number between 1 to 10");

let number = Number (userInput);

let result = number * 2;
alert( "The result is " + result);
// ANS NO: 23

let favNum = prompt("What is your favorite Number?");
if (favNum === ""){
    favNum = 8
}
alert( "your favorite Number is " + favNum);

// ANS NO: 24
let que = prompt("What is the capital of france?");
if (que ===  "paris"){
    alert("correct!");
}
else{
    alert("Try again!");
}

// ANS NO: 25
let que1 = prompt("What is the capital of United Kingdom?");
if (que1 === "london" || que1 === "united kingdom"){
    alert("correct!");
}
else{
    alert("incorrect!");
}

// ANS NO: 25
let score = 0;

let que2 = prompt("What is the capital of france?");
if (que2 === "paris"){
    alert("correct!");
    score++;
    alert("Your current score is: " + score);
}
else{
    alert("Try again!");
    alert("Your current score is: " + score);
}

let que3 = prompt("What is the capital of United Kingdom?");
if (que3 === "london" || que1 === "united kingdom"){
    alert("correct!");
    score++;
    alert("Your current score is: " + score);
}
else{
    alert("incorrect!");
    alert("Your current score is: " + score);
}

let que4 = prompt("What is the capital of pakistan?")
if (que4 === "islamabad"){
    alert("correct!");
    score++;
    alert("Your current score is: " + score);
}
else{
    alert("incorrect!");
    alert("your current score is: " + score);
}
ANS NO: 26
let germanyCapital = prompt("what is the capital of germany?");
let mathAnswer = prompt("What is 10 + 10?");

 let correctGermanyCapital = germanyCapital === "berlin";
 let CorrectMathAnswer = mathAnswer === "20";

if(correctGermanyCapital && CorrectMathAnswer){
    alert("You got both right Answers!");
}
else if (correctGermanyCapital || CorrectMathAnswer){
    alert("You got one correct Answer!");
}
else{
    alert("Sorry, both answers are wrong.");
}
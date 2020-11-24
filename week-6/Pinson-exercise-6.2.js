/*
============================================
; Title: Pinson-Exercise 6.2.js
; Author: Richard Krasso
; Date: November 23rd 2020
; Modified By: James Pinson
; Description: This assignment teaches us how to create and execute a try, catch, finally block. 
;============================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

//This is the start of the program. 

//This is the assignment header. 
const header = require('./Pinson-Header.js');

//This calls the assignment header to be displayed.
console.log(header.display("James", "Pinson", "Exercise 6.2") + "\n");

//This is the try where normally the code runs without problems but it can sometimes throw an exception. 
try {

  var x = 0;

  var y = 1;

  var sum = y / x;

//This is the exception if the sum is equal to zero then display the message "The Solution is Undefined"
if (sum == Infinity) throw "The Solution Is Undefined";

  console.log(sum);

//This will catch the error and display the exception message. 
}  catch (err) {

  console.log("Catch clause: " + err);

//This block contains a statement that will always execute regardless of what happens in the try block. 
} finally {

  console.log("Finally clause reached...");

}

//This is the end of the program. 

/*
============================================
; Title: Exercise 3.2.js
; Author: Richard Krasso
; Date: November 5th 2020
; Modified By: James Pinson
; Description: This assignment will test the understanding of statements and how to incorporate logical error handling in applications.
;============================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

//Here is our assignment header
const header = require('./Pinson-Header.js');

//We have the six variables which we will use to test our match functions. 
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Four";
var testVar6 = "Three";

// We have our match functions, and what to return if our log is a match or not a match. 
function match(arg1, arg2) {
  if (arg1 === arg2)
    return true
  else
    return false
}

function logMismatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do not match!");
}

function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do match!");
}

// This is our header display.
console.log(header.display("James", "Pinson", "Exercise 3.2"));

//This is the output for our simple match function.
console.log("\r\n" + match("A","B"));
console.log(match(2, 2) + "\r\n");

// Here are the "if...else" statements set to deliver us the expect output if they match or don't match. 
 if ( match(testVar1, testVar2)){
  logMatch( + testVar1, testVar2);
} else {
  logMismatch(testVar1, testVar2);
}

if (match(testVar3, testVar4)) {
  logMatch(testVar3, testVar4);
} else {
  logMismatch(testVar3, testVar4);
}

if (match(testVar5, testVar6)) {
  logMatch(testVar5, testVar6);
} else {
  logMismatch(testVar5, testVar6)
}

//This is the end of the program.

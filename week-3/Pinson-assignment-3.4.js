/*
============================================
; Title: Pinson-assignment 3.4.js
; Author: Richard Krasso
; Date: November 8th 2020
; Modified By: James Pinson
; Description: This assignment will show I know how to create a while loop statement that matches my picked number to random numbers for 10 iterations.
;============================================
*/


//Here is the assignment header.
const header = require('./Pinson-Header.js');

 //Here we assign the variables for the intro header, x, and the number we picked. 
var intro = '-- DO THE NUMBERS MATCH GAME --'
var x = 0;
var pick= parseInt(6);

//This is the function to generate a random number as well as our match functions. 
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

function match(arg1, arg2) {
    if ( arg1 ==  arg2)
      return true
    else
      return false
  }
  
  function logMismatch(arg1, arg2){
    console.log(arg1 + " does not match " + arg2 + "!");
  }
  
  function logMatch(arg1, arg2) {
    console.log(arg1 + " does match " + arg2 + "!");
  }

//This is the output which calls the assignment header
console.log(header.display("James", "Pinson", "Assignment 3.4"));

//This is the output to call our intro header.
console.log("\r\n" + intro);

//This is our while loop statement which matches the number we picked versus a random number for ten iterations. 
while (x<10){
index = randomNumber()
if ( match( pick, index)){
    logMatch( pick, index);
} else {
    logMismatch( pick, index);
}
    x++;
}

//This is the end of the program. 



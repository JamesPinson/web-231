/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 3.4
  Today's Date

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */

//Here is our assignment header.
const header = require('./Pinson-Header.js');

 //Here we assign the variables for the intro header, x, and the number we picked. 
var intro = '-- DO THE NUMBERS MATCH GAME --'
var x = 0;
var pick= parseInt(6);

//Here is the function to generate a random number as well as our match functions. 
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

//Here is the output we call the assignment header
console.log(header.display("James", "Pinson", "Exercise 3.2"));

//Here we call our intro header.
console.log("\r\n" + intro);

//Here is our while loop function which matches the number we picked versus a random number for ten iterations. 
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



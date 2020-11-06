/*
============================================
; Title: Pinson-exercise-3.3.js
; Author: Richard Krasso
; Date: November 5th 2020
; Modified By: James Pinson
; Description: This assignment teaches how to properly execute a switch statement. 
;============================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

//This is the assignment header
const header = require('./Pinson-Header.js');

//This is the variable for the key that was pressed based off the key codes.
let eventKeyCode = 13

//This is the header display.
console.log(header.display("James", "Pinson", "Exercise 3.3") + "\r\n");

// This switch statement will return the correlating response based upon the event key code. 
switch (eventKeyCode) {
  case 13:
    console.log("The enter key was pressed");
    break;
  case 16:
    console.log("The shift key was pressed");
    break;
  case 32:
    console.log("The spacebar key was pressed");
    break;
  case 8:
    console.log("The backspace / delete key was pressed");
    break;
  default:
    console.log("Unrecognized key");
    break;
}

// This is the end of the program. 
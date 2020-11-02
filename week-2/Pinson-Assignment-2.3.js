/*
============================================
; Title: Pinson-Exercise-2.3.js
; Author: Richard Krasso
; Date: 01 November 2020
; Modified By: James Pinson
; Description: This Assignment teaches us how to create a function, assign a return value, and call the function. 
;============================================
*/

//This is the personal header for all documents.
const header = require('./Pinson-Header.js');

//This is the property for the myName Function.
myName.james='James Pinson!';

//This function is meant to display a greeting from user. 
function myName() {
    return myName.james;
}

//This is where we call the output for the header and function.
console.log(header.display('James', 'Pinson', 'Exercise 2.3'));
console.log("\r\n" + 'Hello '  +   myName());


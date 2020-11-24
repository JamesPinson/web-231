/*
============================================
; Title: Pinson-Exercise 6.3.js
; Author: Richard Krasso
; Date: November 23rd 2020
; Modified By: James Pinson
; Description: This assignment shows us how to create and call object literals.
;============================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

//This is the start of the program. 

//This is the assignment header.
const header = require('./Pinson-Header.js');

//This is the object literal for employee we assign different value pairs to the variable employee. 
const employee ={

    id: 101,

    department: "Help Desk Support",

    fullName: "Bob Jones"
};

//This calls the assignment header for display.
console.log(header.display("James", "Pinson", "Exercise 6.3") + "\n");

//This calls the variables id, department, and requester is the desired format.
console.log("{id: " + employee.id + ", name: " + employee.department + ", requester: " + employee.fullName + "}")

//This is the end of the program. 


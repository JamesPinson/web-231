/*
============================================
; Title: Pinson-Exercise 7.2.js
; Author: Richard Krasso
; Date: December 6th 2020
; Modified By: James Pinson
; Description: This exercise shows us how to create JavaScript objects through constructor functions. 
;============================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/
//This is the start of the program.

//This is the assignment header.
const header = require('./Pinson-Header.js');

//This creates the constructor function assigning variables to each value pair. 
function employee(id, firstName, lastName, title){

  this.id = id;

  this.firstName = firstName;

  this.lastName = lastName;

  this.title = title;

}

//This is where we assign the variables to each of the value pairs. 
var employees = [

  new employee(1, "Thomas", "Edison", "Software Engineer"),

  new employee(2, "Benjamin", "Franklin", "Programmer"),

  new employee(3, "Nikola", "Tesla", "Project Manager"),

  new employee(4, "Charles", "Babbage", "Product Manager"),

  new employee(5, "Alexander", "Bell", "Business Analyst")
]

//This calls the assignment header for display.
console.log(header.display("James", "Pinson", "Exercise 7.2") + "\n");

//This calls the constructor function to give us the desired output. 
let index = 1
for (let x = 0; x < employees.length; x++) {
  console.log(index + " " + employees[x].firstName + " "+ employees[x].lastName + " " + employees[x].title)
  index++
}

//This is the end of the program. 

/*
============================================
; Title: Pinson-Exercise 5.2.js
; Author: Richard Krasso
; Date: November 18th 2020
; Modified By: James Pinson
; Description: This assignment teaches us how to create an array and use the forEach() function to iterate over the array and output the results. 
;============================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/

//This is the start of the program

//This is the assignment header. 
const header = require('./Pinson-Header.js');

//This creates the array for the variable foods. 
const foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

//This calls my header to be displayed. 
console.log(header.display("James", "Pinson", "Exercise 5.2") + "\n");

//This calls the variable foods to display my listed array. 
foods.forEach(function(food) {
    console.log(food);
});

//This is the end of the program. 
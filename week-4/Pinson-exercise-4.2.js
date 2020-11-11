/*
============================================
; Title: Pinson-Exercise 4.2.js
; Author: Richard Krasso
; Date: November 11th 2020
; Modified By: James Pinson
; Description: This assignment we learn to create an array and how to call the array. 
;============================================
*/

//This is the assignment header.
const header = require('./Pinson-Header.js');


//This is the start of the program.


//This is were we assign the string array to the  variable fruits. 
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];



//The function is created to display the array when called. 
function getFruit(arr){
    for(var k = 0; k < arr.length; k++){
        console.log(arr[k]);
    }

}

//This is where we call the assignment header.
console.log(header.display('James', 'Pinson', 'Exercise-4.2',) + "\r\n");


//This is were we call the function with the variable fruits.
getFruit(fruits);


//This is the end of the program.
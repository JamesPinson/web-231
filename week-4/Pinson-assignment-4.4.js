/*
============================================
; Title: Pinson-Exercise 4.4.js
; Author: Richard Krasso
; Date: November 11th 2020
; Modified By: James Pinson
; Description: This assignment teaches us how to call an array, how to return a sorted array, and how to return a matching array value. 
;============================================
*/

//This is the start of the program. 


//This is the assignment header. 
const header = require('./Pinson-Header.js');


//This is were we assign the string array to the variable states.
const states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];


//This function is there to return the value that matches el. 
function getState(el, value){
    return el === value
    }


//This is used to call the assignment header. 
console.log(header.display('James', 'Pinson', 'Exercise-4.4',) + "\r\n");


//This is used to call the string of text. 
console.log(' -- ORIGINAL ARRAY --');


//This is used to call the original array. 
states.forEach(state => console.log(state));


//This is used to call the string of text. 
console.log('\n-- SORTED ARRAY --');


//This is used to call the original array sorted alphabetically. 
states.sort().forEach(state => console.log(state));


//This is used to call a string of text. 
console.log('\n-- SELECTED VALUE--');


//This is used to call the state in the array that matches Iowa. 
console.log(states.filter (
    function (el) {
        return getState(el, "Iowa")
    }
)[0]
);

//This is the end of the program. 
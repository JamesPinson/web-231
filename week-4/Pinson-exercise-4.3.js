/*
============================================
; Title: Pinson-exercise-4.3.js
; Author: Richard Krasso
; Date: November 11th 2020
; Modified By: James Pinson
; Description: This assignment teaches how to create an array and how to call a certain array value using conditionals to filter the array. 
;============================================
*/

//This is the start of the program


//This is our assignment header. 
const header = require('./Pinson-Header.js');


//This is were we assign the variables to vehicles. 
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];


//This is the function that generates the value for our array items.
function getValue(arr, val) {
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] === val)
            console.log(arr[k]);
    }
}


//This displays our assignment header.
console.log(header.display('James', 'Pinson', 'Exercise-4.3',) + "\r\n");


// This calls all of the items in our array.
console.log("--DISPLAYING ARRAY ITEMS --"); 
for (var x = 0; x < vehicles.length; x++) {
    console.log(vehicles[x]);
    }


// This creates a new line.
console.log("");


//This calls a selected item in our array. 
console.log(" -- SELECTED VALUE -- ");
getValue(vehicles, "Motorcycle");


//This creates a new line. 
console.log("");


//This calls a selected item in our array. 
console.log(" -- SELECTED VALUE -- ");
getValue(vehicles, "Bus");
    

// This is the end of the program.

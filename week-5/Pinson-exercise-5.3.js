/*
============================================
; Title: Pinson-Exercise 5.3.js
; Author: Richard Krasso
; Date: November 18th 2020
; Modified By: James Pinson
; Description: This exercise teaches us how to create a keyed collection using ES5 standards by building an Array-Like Object collection. 
;============================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

//This is the start of the program. 

//This is the assignment header. 
const header = require('./Pinson-Header.js');

//This is the keyed collection array of composers. 
const composers = [
    {
        firstName: "Ludwig van",
        lastName: "Beethoven",
        genre: "Classical",
        rating: 8
    },
    {
        firstName: "Wolfgang Anadeus",
        lastName: "Mozart",
        genre: "Classical",
        rating: 10
    },
    {
        firstName: "Johann Sebastian",
        lastName: "Bach",
        genre: "Classical",
        rating: 9
    },
    {
        firstName: "Joseph",
        lastName: "Haydn",
        genre: "Classical",
        rating: 6
    },
    {
        firstName: "Franz",
        lastName: "Schubert",
        genre: "Classical",
        rating: 5
    }
];
// This call's the assignment header for display. 
console.log(header.display("James", "Pinson", "Exercise 5.2") + "\n");

//This calls the keyed collection array in the desired format. 
console.log("-- COMPOSERS --");

composers.forEach(function(composer){
    console.log(
        "Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
    );
});

//This is the end of the program. 
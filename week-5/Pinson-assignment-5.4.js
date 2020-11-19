/*
============================================
; Title: Pinson-assignment 5.4.js
; Author: Richard Krasso
; Date: November 18th 2020
; Modified By: James Pinson
; Description: This assignment shows us how to use the map() method to display a filtered array. 
;============================================
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

//This is the map function to filter the composers by rating. 
let ratings = composers.map((composer) => {
    return composer.rating
})

//This is the map function to filter the composers by genre. 
let genres =  composers.map((composer) => {
    return composer.genre
})

//This call's the header to display the assignment header. 
console.log(header.display("James", "Pinson", "Assignment 5.4") + "\n");

// This iterates over each array using the forEach function to output the array filtered by rating. 
console.log (' -- COMPOSERS BY RATING -- ')
index = 1
composers.forEach((composer) => {
    console.log( 'Rating: ' + composer.rating + ' \nComposer: ' + composer.lastName + '\n' )
    index++
})

// This iterates over each array using the forEach function to output the array filtered by genre. 
console.log (' -- COMPOSERS BY GENRE -- ')
index = 1
composers.forEach((composer) => {
    console.log( 'Genre: ' + composer.genre + '\nComposer: ' + composer.lastName + '\n')
    index++
})

//This is the end of the program. 


/*
============================================
; Title: Pinson-assignment-2.4.js
; Author: Richard Krasso
; Date: 01 November 2020
; Modified By: James Pinson
; Description: This assignment shows us how to create and call functions with parameters.
;============================================
*/
//This is my personal header for all assignments.
const header = require('./Pinson-Header');

//I have assigned all the variables below for the functions. 
let firstName = 'James';
let lastName = "Pinson";
let year = 2020;
let month = 'November';
let day = 01;
let v = 51.4;
let place = 1; 
let age = "26 years old";
let savings = "2000 dollars";

//This function should return my full name. 
function fullName(firstName, lastName){
return firstName   +  lastName;
}

//This function is used to return the current date. 
function dateWriter(year, month, day){
return year + month + day;
}

//This function is used to return the current temperature. 
function formatNumber(val, numOfPos){
  return val.toFixed(numOfPos);
}

//This function is used to return my age in only integers. 
function convertToInt(age){
  return parseInt(age);
}

//This function is used to return my savings account goal in only the numeric value. 
function convertToFloat(savings){
  return parseFloat(savings);
}

//This is where the functions are called. 
console.log(header.display('James', 'Pinson', 'Assignment 2.4'));
console.log("\r\n" + (fullName('Hello my name is' + ' ' + firstName + ' ',  lastName + '!')));
console.log("\r\n" + 'Today\'s date is '+ (dateWriter(year +' ',   month + ' ',   day)) + ' and the current temperature is ' + (formatNumber(v, place)) + ' degrees.');
console.log("\r\n" + 'I am ' + (convertToInt(age)) + ' years old and my savings account goal is ' + (convertToFloat(savings)) + ' dollars.');

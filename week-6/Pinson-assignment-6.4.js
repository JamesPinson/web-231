/*
============================================
; Title: Pinson-Assignment 6.4.js
; Author: Richard Krasso
; Date: November 23rd 2020
; Modified By: James Pinson
; Description: This assignment shows us how to create and call object literals and nested object literals. 
;============================================
*/

//This is the start of the program.

//This is my assignment header. 
const header = require('./Pinson-Header.js');

//This is the object literal ticket with fields id, name, dateCreated, and priority.
const ticket = {

  id: 105,

  name: "Ticket",

  dateCreated: new Date().toLocaleDateString('en-US'),

  priority: "High",

//This is the nested object literal person with fields id, firstName, lastName, and jobTitle.
  person: {

    id: 101,

    firstName: "Bob",

    lastName: "Jones",

    jobTitle: "Programmer I"
  }
};

//This is where I call my assignment header for display. 
console.log(header.display("James", "Pinson", "Assignment 6.4") + "\n");

//This is where I call my object literal and nested object literal fields in the desired format. 
console.log(ticket.name + " " + ticket.id + " was created on " + ticket.dateCreated +
            " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ")." )

//This is the end of my program. 

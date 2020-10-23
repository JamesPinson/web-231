/*

Title: Pinson-Assignment1.5-Types, Values, and Variables
Author: James Pinson
Date: 22 October 2020
Description: Solution to assign and output variable values

*/

//start program

//Assignment focuses on assigning multiple variable values

/*
Expected Output:
Employee 1 First Name, Last Name, Address, Pay Rate, Hire Date
Employee 2 First Name, Last Name, Address, Pay Rate, Hire Date
Employee 3 First Name, Last Name, Address, Pay Rate, Hire Date
*/

var oneFirstName= 'Jonathan';
var oneLastName= 'Smith';
var oneAddress= '455 Elm Dr.';
var onePayRate= 13.89.toFixed(1);
var oneHireDate= new Date(2017, 8, 6).toLocaleDateString('en-GB');

var twoFirstName= "Alexis";
var twoLastName= 'Thompson';
var twoAddress= '783 Moore Rd.';
var twoPayRate= 17.49.toFixed(1) ;
var twoHireDate= new Date(2018, 9, 13).toLocaleDateString('en-GB');

var threeFirstName= 'Samantha';

var threeLastName= 'Rose';

var threeAddress= '691 Johnson St.';

var threePayRate=  20.85.toFixed(1);

var threeHireDate= new Date(2019, 1, 20).toLocaleDateString('en-GB');

//output

console.log('Employee One First Name:' + oneFirstName)
console.log('Employee One Last Name:' + oneLastName)
console.log('Employee One Address:' + oneAddress)
console.log('Employee One Pay Rate:' + onePayRate)
console.log('Employee One Hire Date:' + oneHireDate)
console.log('Employee Two First Name:' + twoFirstName)
console.log('Employee Two Last Name:' + twoLastName)
console.log('Employee Two Address:' + twoAddress)
console.log('Employee Two Pay Rate:' + twoPayRate)
console.log('Employee Two Hire Date:' + twoHireDate)
console.log('Employee Three First Name:' + threeFirstName)
console.log('Employee Three Last Name:' + threeLastName)
console.log('Employee Three Address:' + threeAddress)
console.log('Employee Three Pay Rate:' + threePayRate)
console.log('Employee Three Hire Date:' + threeHireDate)


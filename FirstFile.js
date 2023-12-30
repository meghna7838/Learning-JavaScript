console.log("My first js file");
//Javascript is a dynamically typed language and so it doesnt specify data \
//structure.
//Three ways to declare and define variables
//1st Way Let

let age;
age =10;
age ="ten";

//All of the above are valid and no error will be there using let we can declare element first and can choose to later define it. The value can also be modified.

//2nd Way Const
//Const is used whenever we need to assign a value which we dont have to modify
//We cannot just declare here
//const year; This will throw error

const year=1999;

//Now here if we write year =2000; this will throw error.


//3rd Way var. Previously this was the only way but due to some drawbacks ECMA came up with const and let

var name;
var myName="Meghna";
myName="Tandon";

//All of the above are valid and have no error.
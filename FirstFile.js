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


//Comments
// ---Single line comment
/* Multiple Line Comments              ---Multiline comments
   can be written inside these
   */

/* Data Types are of two types in JS
1. Object :- Different from other programming language but we will be talking about it a little later. 
2. Primitive Data Types 

/* Primitive Data Type*/

//1. Number

let num = 10;
console.log(num);
console.log(typeof num);


//2. String

const firstName="Meghna";
const lastName='Tandon';
const nickName=`Frosty`;

//All above definations of string are correct

console.log(firstName);
console.log(typeof firstName);
console.log(lastName);
console.log(typeof lastName);
console.log(nickName);
console.log(typeof nickName);
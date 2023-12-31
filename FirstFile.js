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


//3. Boolean

let isTrue=false;

console.log(isTrue);
console.log(typeof isTrue);

//4. Undefined

let a ;
console.log(a);
console.log(typeof a);

//5. Null

let b =null;
console.log(b);
console.log(typeof b); 
// Here one thing to note is that the type will come as object its explanation 
// would be provided later.


//6. Symbol(ES6/2015)
//This would be exlained later

//7. BigInt(ES2020)
// Number is supposed to be till 64 bit above that we will have to use Bigint 
// It is hardly used.
 let m = 10n;
 console.log(m);
 console.log(typeof m);

 console.log(5&&7);

 function main(len,wid){
    let result;
    //Write the program to calculate the area of rectangle using len and wid as length and width of rectangle
    
   result = len* wid;
    
    return result;
    }

let len = prompt("Please enter len");
let wid = prompt("Please enter wid");

let area = main(len,wid);
console.log(area);


/* Type Coercion - Implicit conversion of data type of the variable when used with different airthematic operation*/

//Additon Operator
let var1='5';
let var2=5;
let var3 = var1+var2;
console.log(typeof var3);
console.log(var3);
//Here the ans is of type is string and output is 55 which means that when string 
//is added with number number also behaves as string and concatination of string 
//happens

//Subtraction operator

var1='55';
var2=10;
var3=var1-var2;
console.log(typeof var3);
console.log(var3);
//Here ans is of type number and the output is 45. Hence when used with 
//subtraction string behaves as number and hence the output is the one we see.

// Multiplication

var1='5';
var2=10;
var3=var1*var2;
console.log(typeof var3);
console.log(var3);
//Here ans is of type number and the output is 50. Hence when used with 
//multiplication string behaves as number and hence the output is the one we see.


//Division 

var1='55';
var2=5;
var3=var1/var2;
console.log(typeof var3);
console.log(var3);
//Here ans is of type number and the output is 11. Hence when used with 
//division string behaves as number and hence the output is the one we see.

console.log(true+true);
//when used in numeric context it is utomatically converted to number 1 hence here
//output will be 2
/* Type conversion :- explicit conversion of var from one datatype to another
Type conversion is of three types
1. ToString
2. ToNumber
3. ToBoolean
*/

// To String 
//a) String();
console.log("************String********");
console.log(String(123));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

//No errors in above code

//b) ToString()
console.log("************ToString***********");
console.log((123).toString());
console.log((true).toString());
//console.log((null).toString()); -Error
//console.log((undefined).toString()); -Error

//We cannot conver null and undefined to string using to String() method it gives error if we try to. We can convert them using String funtion.


//To Number
//a) number()
console.log("********Number***********");
console.log(Number('12'));
console.log(Number('value'));//NaN
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));//NaN

//NaN is not a number

//b) Using unary operator
console.log("************Unary Operator************");
let abc= "123";
console.log(+abc);
let abcd="123N";
console.log(+abcd);//NaN

//c) ParseInt()
console.log("************ParseInt()*************");
console.log(parseInt("12345"));
console.log(parseInt("123456f"));//Here behvaiour is different from number instead of NaN it will give 123456
console.log(parseInt("1234.56g"));//Ouput is 1234 only integer value is returned
console.log(parseInt("123f4567g"));
console.log(parseInt("f56789f"));//NaN shouldnt start with alphabet

//d) ParseFloat() :behaviour same as parseInt() it returns float/decimal number
console.log("***************ParseFloat()**********");
console.log(parseFloat("12345f"));
console.log(parseFloat("123.45gh"));
console.log(parseFloat("123.56.78"));

//Boolean
console.log("**************Boolean***************");
console.log(Boolean(100));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean("gh"));
console.log(Boolean(undefined));
console.log(Boolean("false"));// Value comes as true becoz it is unempty string

//****************SWITCH******************
switch ("Apple") {
    case "Apple":
        console.log("This is an apple");        
        break;
    case "Kiwi":
        console.log("This is a kiwi");
        break;
    default:
        console.log("Neither Kiwi nor Apple")
        break;
}
console.log("Outside Switch");

//*************************Ternary Operator***************/

let num12=5;

num%2 ==0?
console.log("Even"):
console.log("Odd");

let amount =1500;
switch(true){
    case (amount<500):
        discount="No Discount";
        break;
    case (amount>=500 && amount<1000):
        discount="10% Discount";
        break;
    case (amount>=1000 && amount<2000):
        discount="20% Discount";
        break;
    case (amount>=2000 && amount<4000):
        discount="30% Discount";
        break;
    case (amount>=4000 && amount<5000):
        discount="40% Discount";
        break;
    default:
        discount="50% Discount";  
}

//For Loop
//entry controlled loop
//Used when we are sure of number of iterations
// for(Iniitalize;Condition;Operation){//Body;}}
//Program to print all odd number 

for(let i=1;i<=50;i+=2)
{
    console.log(i);
}

//While Loop
//Entry Controlled loop
//Used when we are not sure of number of iterations 
//While(consition){//Body;}
//Program to print each digit from the number given

num =12345;

while(num!==0)
{
    let digit = num%10;
    num = parseInt(num/10);//ParseInt because otherwise we will get float 
    console.log(digit);
}

//Do while Loop
//Exit controlled loop
//Will be executed at least one
//do{//Body;}while(condition)
//Program to enter num till number is greater than 50

do {
num = prompt("Enter a number");
}while(num<=50)

//**********Function***********/
//Code reusability
//No point of creating a function if we are not reusing it
//Unparameterized Function

function greetUser(){
    console.log("Hello!! Welcome to my github account");
}

greetUser();

//Parameterized Function
function greetUserName(username)
{
console.log("Hello "+username+ "!!, Welcome to my github account");
}

greetUserName("Sumukha");

//Template Literals 
function sum(num1=0,num2=0)//Default Parameter
{
    //console.log("sum of two number is :"+num1 +num2); -> output here is 23 if we want to make it work then we have to do console.log("sum of two number is :"+(num1 +num2));
    //Template Literal usage
    console.log(`Sum of two number is : ${num1 +num2}`);
}
sum(2,3);
sum(2);//Output is NaN as num1 =2 num2 =undefined


//Return statement

function squared(number)
{
    return number*number;
}

let abcde= squared(2);
console.log("Square of number 2 is "+ abcde);


//Arrays
//Arrays are heterogenous in nature i.e. it can has more than one type of data 

const students=["sumukha","Meghu","Lala","Lali"];
console.log(students);

const car = new Array("car1","car2",1,true);
console.log(car);
//No error can store more than one type. It can even store function.

const teams=["SRK","MI","DD","LGT"];

//Methods used in array
//1) Addition in array
//  a)Push():- returns the length of array

len= teams.push("GT");
console.log(len);
console.log(teams);

//  b)unshift():- returns the length of array
len= teams.unshift("KKR");
console.log(len);
console.log(teams);

//2)Deletion in array
//  a)Pop():- returns the element that is deleted.
len = teams.pop();
console.log(len);
console.log(teams);

//  b)shift():- returns the elements that is deleted.
len = teams.shift();
console.log(len);
console.log(teams);

//3) Check if element is present or not 
//  a)slice(no of elements to be sliced) :- Doesnt change original array. Can take both negative and positive value.
console.log(teams);
console.log(teams.slice(2));
console.log(teams);
console.log(teams.slice(-1));
console.log(teams);
console.log(teams.slice());
//  b)splice():- Can simultaneously add and delete elements. Make changes in original array. First argument is the index
// second is how many elements to be deleted on that index. Third onwards we add whatever is present.
teams.splice(2,0,"GT","KKR");
console.log(teams);

//4) Concat()- do not modify the original array. 
const teams2 = ["India","SriLanka","Autralia"];

const mergedTeams= teams.concat(teams2);

console.log(mergedTeams);

function reverseString(str){
    //Implement Your function here
        let arr = Array.from(str);
        let arr2 = arr.reverse();
        let result= arr2.join('');
        return result;
    }
    console.log(reverseString("Hello"));
    //Output : "olleH"

    //Loop over arrays
    let students1 = [
        'Tina',
        'Raj',
        'Bobby',
        'Seema',
        'Alexa',
        'Sita'
    ]

    for(i=0;i<students1.length;i++)
    {
        console.log(`Roll no ${i+1} : ${students1[i]}`);
    }

    //Complete the deleteOccur function
//Do not alter the starter Code.
let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let ele = 56;
function deleteOccur(arr,ele){
   //Implement Your function here
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]===ele)
            {
                arr.splice(i,1);
            }
    }
    return arr;
};

console.log('['+deleteOccur(arr,ele)+']');
//Output: [23,4,78,5,63,45,210];

/*The issue with your code is that when you use arr.splice(i, 1) to remove an element from the array, it modifies the 
array in-place, which means the length of the array decreases, and the indices of the remaining elements shift. This 
can lead to skipping elements during the iteration, and you may end up not checking all occurrences of the element.*/

//Complete the findDuplicate function

arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr){
//Implement your function here
	let ans=[];
    let counter=0;
    for(let i=0;i<arr.length;i++)
        {
        for(let j=i+1;j<arr.length;j++)
            {
                if(arr[i]===arr[j])
                    {
                        if(!ans.includes(arr[i]))
                            {
                       ans.push(arr[i]); 
                            }
                    }
            }
        }
    return ans;
}    
console.log(findDuplicate(arr));

//Rest operator(...):- 

const aprilBatch=["Tina","Madhuri"];
const mayBatch=["Rithik","Deepak","Shalini"];
const juneBatch=["Saba","Shivani"];
const julyBatch=[];

function addStudents(Batch,...students)
{
    for(let i of students)
    {
        Batch.push(students);
    }
    console.log(Batch);
}

//Spread Operator :- used for shallow copy an element. Shallow copy means if we change original array copied array will not have any changes

const newBatch=mayBatch;
console.log(mayBatch);
console.log(newBatch);
mayBatch.push("NewStudent");
console.log(mayBatch);
console.log(newBatch);

//Here we will see both will get modified to avoid this

const newBatch2 = [...mayBatch];
console.log(mayBatch);
console.log(newBatch2);
mayBatch.push("NewStudent2");
console.log(mayBatch);
console.log(newBatch2);

//Spread Operator can also be used for concatination

const mergedBatch = [...mayBatch,...juneBatch];
console.log(mergedBatch);


//Set
//complete the function mergeArray
//Do not alter the starter code.
let arr1 = [1,2,4,5,7];
let arr2 = [3,4,6,7,9,0];
function mergeArray(arr1,arr2){
    //Implemet your function here
    const result = [...arr1,...arr2];
    const myset= new Set(result);
    const result2 = Array.from(myset);
    return result2;
}
console.log(mergeArray(arr1,arr2));
//Output : [1,2,4,5,7,3,6,9,0]

//Objects
//We can define object before defining/declaring a class in java script

const studentobj= {
    name:"Alexa",
    age:10,
    hobby:"Dancing",
    100:"Hundred",
    show:function(){//Anonymous function
        console.log("This is student section");
    }
}

console.log(studentobj);
console.log(studentobj.name);//Dot Notation
console.log(studentobj["name"]);//Block notation
studentobj.show();


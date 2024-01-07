/* Function in JS */

//Function Declaration
function sum(a,b)
{
    return a+b;
}
const sum1 =sum(6,5);
console.log(sum1);//11
//The above lines of code can be moved to line 4 and still we will get same output with no error. 
//This is because of hoisting 

//Function expression :- function can be assigned to variabes. These are also called anonymous functions as they are not named or used anywhere else
var sum2 = function(a,b)
{
return a+b;
}
console.log(sum2);// output will come out to be function definition
console.group(sum2(2,3));//5
//If we move the above lines to line 13 then we will get error because we are 
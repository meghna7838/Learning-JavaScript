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


//Arrow Function
var prod = (num1,num2) => {
    return num1*num2;
}
console.log(prod(2,3));

//The above function can also be written as following

var product = (num1,num2) => num1*num2;

console.log(product(3,4));

let result = (() => {
    let x=5;
    return ()=>
    {
        x+=1;
        return x;
    };
} ) ();

console.log(result);

function main() {
    let userAuth = (function () {
      let registeredUsers = [];
  
      function registerUser(username, password) {
        if(checkCredentials(username,password)){
          return `The user is already registered`;
        }
        else{
        registeredUsers.push({ username: username, password: password });
        return `The user have been added to the registeredUser array`;
        }
      }
  
      function checkCredentials(username, password) {
        for (let i = 0; i < registeredUsers.length; i++) {
          if (
            registeredUsers[i].username === username &&
            registeredUsers[i].password === password
          ) {
            return true;
          }
        }
        return false;
      }
  
      return {
        registerUser: registerUser
      };
    })();
    return userAuth;
  }
  
  //Pure functions
  //1.A function that return same output for same set of inpur. So , its O/P is not manipulated by any external factor\\
  //2.This function should not even manipulate any external element.
  //3.Even console.log makes the function as impure because this is not js provided funcn instead it is provided by web API
  /*Pure Factor*/

  function calculate(num1,num2)
  {
    return num1*num2;
  }
console.log(calculate(2,3));//6
//The above function is pure function

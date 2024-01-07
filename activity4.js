//Complete the findClassTopper function
//Do not alter alter the starter code. 
    //The object on which you will be working will be of this format.
    // const studentMarks = {
    //     John: [85, 90, 92, 88, 87],
    //     Jane: [92, 95, 89, 91, 94],
    //     David: [78, 85, 90, 92, 84],
    //     Emily: [90, 88, 92, 87, 91],
    //     Michael: [86, 92, 90, 89, 94]
    //     };
    //     function findClassTopper(studentMarks){
    //         //Implement your function here
    //         let topper="";
    //         let max=0;
    //         let marksJohn=0;
    //         let marksJane=0;
    //         let marksDavid=0;
    //         let marksEmily=0;
    //         let marksMichael=0;
    //         for(let i=0;i<5;i++)
    //             {
    //          marksJohn += studentMarks.John[i];
    //             }
           
    //             if (max<marksJohn) 
    //             {
    //             max=marksJohn;
    //             topper="John";
    //             }
    //         for(let i=0;i<5;i++)
    //             {
    //          marksJane += studentMarks.Jane[i];
    //             }
    //             if (max<marksJane)
    //             {   
    //             max=marksJane;
    //             topper="Jane";
    //             }
    //         for(let i=0;i<5;i++)
    //          {
    //          marksDavid += studentMarks.David[i];
    //         }
    //         if (max<marksDavid)
    //         {   
    //         max=marksDavid;
    //         topper="David";
    //         }
           
    //         for(let i=0;i<5;i++)
    //             {
    //          marksEmily += studentMarks.Emily[i];
    //             }
    //         if (max<marksEmily) {max=marksEmily;
    //          topper="Emily";
    //         }
    //         for(let i=0;i<5;i++)
    //             {
    //          marksMichael += studentMarks.Michael[i];
    //             }
    //         if (max<marksMichael) {max=marksMichael;
    //          topper="Michael";
    //         }
    //         return topper;
            
    //     }
    //     console.log(findClassTopper(studentMarks));
    //     //Output : "Jane";
        

        //Right way
        
        const studentMarks = {
            John: [85, 90, 92, 88, 87],
            Jane: [92, 95, 89, 91, 94],
            David: [78, 85, 90, 92, 84],
            Emily: [90, 88, 92, 87, 91],
            Michael: [86, 92, 90, 89, 94]
          };
        
          function calculateAverage(marks) {
            let sum = 0;
            for (let i of marks) {
              sum += i;
            }
            return sum / marks.length;
          }
        
          function findClassTopper(studentMarks) {
            let highestAverage = 0;
            let classTopper;
        
            for (let student in studentMarks) {
              const average = calculateAverage(studentMarks[student]);
              if (average > highestAverage) {
                highestAverage = average;
                classTopper = student;
              }
            }
            return classTopper;
          }

          //Complete the URLconstructor function 
// Do not change the starter code. 

//Complete the URLconstructor function 
// Do not change the starter code. 

function URLconstructor(queryParameters,domain,path){
    let finalurl = "";
    finalurl += "https://";
    finalurl += domain;
    finalurl += path;
    for( let key in queryParameters){
        finalurl += '?';
        finalurl += key;
        finalurl += '=';
        finalurl += queryParameters[key];
    }
    return finalurl; 
}
const queryParameters = {name:'John',age:'28'}; 
const domain = "google.com";
const path = '/search';
console.log(URLconstructor(queryParameters,domain,path));
//output: https://google.com/search?name=John?age=28

//complete the calculatePrice function
//Do not alter the starter code
    const goods = {
        apple: { price: 150, quantity: 2 },
        banana: { price: 75, quantity: 3 },
        orange: { price: 125, quantity: 1 }
        };    
        function calculatePrice(goods){
            //Implement your function here
        let totalPrice = 0;
    
        for (let item in goods) {
    
        const { price, quantity } = goods[item];
    
        const itemTotalPrice = price * quantity;
    
        totalPrice += itemTotalPrice;
    
        }
    
        return totalPrice;
    
        
        }
        console.log(calculatePrice(goods));
        //output : 650

//Hoisting:- The concept where one can use variables and function without even declaring is called hoisting.

console.log("Username:"+username);
console.log("UserAge:"+userage);
greetUser(username);

var username="tom";
var userage="10";

console.log("Username:"+username);
console.log("UserAge:"+userage);

function greetUser(name)
{
    var greet = "I hope you are doing fine";
    console.log("hello"+name+greet);
    var currentYear=2030;
    const year = currentYear - userage;
    return `Your birth age is ${year} `;
}

console.log(greetUser(username));


var varName=10;
let letName=20;
const constName=30;

function print(){
var varLocal=10;
let letLocal=20;
const constLocal=30;
console.log(varLocal,letLocal,constLocal);
console.log(varName,letName,constName);
}
//console.log(varLocal,letLocal,constLocal);//Error
console.log(varName,letName,constName);
print();

{
    var varName1=10;
    let letName1=20;
    const constName1=30;

}
//console.log(varName1,letName1,constName1);
//const and let has functional and block scope whereas var varNAme1 wont be giving any issue even if it is declared in different block.

//scope Chaining 

// var a=10;
// let b =20;
// const c =30;

// function print(){
//     var a ="ten";
//     let b ="twenty";
//     console.log("**** Inside print function ****");
//     console.log(a,b,c);
//     console.log("***************");

//     function inPrint(){
//         var a = "inner10";
//         console.log("* Inside innerprint function*");
//         console.loh(a,b,c);
//     } 
//     inPrint();
// }
// console.log(a,b,c);
// print();

var a = 10;
let b = 20;
var c = 30;

function print() {
  var a = 'ten';
  let b = 'twenty';

  console.log('***** Inside print Function*****');
  console.log(a, b, c);
  console.log('***** *****');

  function innerPrint() {
    var a = 'inner10';
    console.log('*Inside innerPrint Function*');
    console.log(a, b, c);
  }
  innerPrint();
}

print();
console.log(a, b, c);

var x1=10;
let x=20;
console.log(x);

function outer(){
    let x=10;
    if(true){
        let y=20;
        var z=30;
        console.log(x+y+z);
    }
    //console.log(x+y+z);//Error
}

let a1 = 'Global';

function outerPrint(){
    let b1 ='OuterPrint';
    return function innerPrint(){
        let c1 ='InnerPrint';
        return `${a1} -> ${b1} -> ${c1}`;
    }
    // const show =innerPrint();
    // console.log(show);
    //return innerPrint;//Valid
}
const show = outerPrint();
console.log(show);
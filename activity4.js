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
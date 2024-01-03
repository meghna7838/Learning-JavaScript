//Complete the findClassTopper function
//Do not alter alter the starter code. 
    //The object on which you will be working will be of this format.
    const studentMarks = {
        John: [85, 90, 92, 88, 87],
        Jane: [92, 95, 89, 91, 94],
        David: [78, 85, 90, 92, 84],
        Emily: [90, 88, 92, 87, 91],
        Michael: [86, 92, 90, 89, 94]
        };
        function findClassTopper(studentMarks){
            //Implement your function here
            let topper="";
            let max=0;
            let marksJohn=0;
            let marksJane=0;
            let marksDavid=0;
            let marksEmily=0;
            let marksMichael=0;
            for(let i=0;i<5;i++)
                {
             marksJohn += studentMarks.John[i];
                }
           
                if (max<marksJohn) 
                {
                max=marksJohn;
                topper="John";
                }
            for(let i=0;i<5;i++)
                {
             marksJane += studentMarks.Jane[i];
                }
                if (max<marksJane)
                {   
                max=marksJane;
                topper="Jane";
                }
            for(let i=0;i<5;i++)
             {
             marksDavid += studentMarks.David[i];
            }
            if (max<marksDavid)
            {   
            max=marksDavid;
            topper="David";
            }
           
            for(let i=0;i<5;i++)
                {
             marksEmily += studentMarks.Emily[i];
                }
            if (max<marksEmily) {max=marksEmily;
             topper="Emily";
            }
            for(let i=0;i<5;i++)
                {
             marksMichael += studentMarks.Michael[i];
                }
            if (max<marksMichael) {max=marksMichael;
             topper="Michael";
            }
            return topper;
            
        }
        console.log(findClassTopper(studentMarks));
        //Output : "Jane";


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
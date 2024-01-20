    const questions = [
      "Question1",
      "Question2",
      "Question3",
      "Question4",
      "Question5"
    ];
    function shuffle(arr) {
      return function () {
        
          //let result = {};
          for(let i =questions.length-1; i>0;i--)
          {
            let j = Math.floor(Math.random()*(i+1));
            console.log(i+" "+j);
            let temp = questions[i];
            questions[i] = questions[j];
            questions[j] = temp;
        
          }
        return questions;
      };
    }
    console.log(shuffle(questions)());

    let inputs = [1,2,3,4,5,6];
    function High(inputs,fn)
    {
            let results = [];
            for(let i =0 ; i<inputs.length;i++)
            {
            results.push(fn(inputs[i]));
            }
            return results;
    }
    function Square(num)
    {
       return num*num;
    }
    function cube(num){
        return num*num*num;
    }

    console.log(High(inputs,cube));
  
    function pizzaPricing(size)
    {
       
        return function(toppings)
        {
            return function(quantity)
            {
                let totalPrice=0;
                if(size ==="Small")
                {
                    totalPrice+=8;
                }else if (size ==="Medium")
                {
                    totalPrice+=10;
                }else
                {
                    totalPrice+=12;
                }

                totalPrice+=t(oppings.length*1.5);
                totalPrice*=quantity;
                return totalPrice;
            }
        }
    }

    function increaseSalaries(employees){
        const updatedEmployees = employees.map((employee) => {
          let salary = employee.salary;
          switch (employee.department) {
            case "sales":
              salary = (salary * 1.1).toFixed(1);
              break;
            case "engineering":
              salary = (salary * 1.15).toFixed(1);
              break;
            default:
              salary = (salary * 1.05).toFixed(1);
              break;
          }
          return { ...employee, salary };
        });
        return updatedEmployees;
      };
      const employeee= increaseSalaries(employee);
      console.log(employeee);
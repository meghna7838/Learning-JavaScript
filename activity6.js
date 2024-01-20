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

    const employees = [
        { id: 1, name: "Alice", department: "sales", salary: 40000 },
        { id: 2, name: "Bob", department: "engineering", salary: 50000 },
        { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
        { id: 4, name: "David", department: "sales", salary: 35000 },
        { id: 5, name: "Emily", department: "engineering", salary: 55000 }
      ];

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
      const employeee= increaseSalaries(employees);
      console.log(employeee);

      let people = [
        { name: 'Matt', age: 25 },
        { name: 'Asma', age: 23 },
        { name: 'Asma1', age: 23 },
        { name: 'Asma1', age: 23 },
        { name: 'Cami1', age: 29 },
        { name: 'Cami', age: 29 }
      ];
      
      function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
          let key = obj[property];
          if (!acc[key]) {
            acc[key] = [];
          }

          let newObj= {
            key: [ obj.name]
          };
          acc[key].push(obj);
          return acc;
        }, {})
      }
      
      let groupedPeople = groupBy(people, 'age')
      console.log(groupedPeople);

      const contacts = [
        {name:"Alice",company:"ABC Inc"},
        {name:"Bob",company:"XYZ Corp"},
        {name:"Charlie",company:"ABC Inc"}
    ];
  
    function mapContactsToCompanies(contacts) {

        return contacts.reduce(function (obj, contact) {
  
          if(obj[contact.company]===undefined)
          obj[contact.company] =[];

          obj[contact.company].push(contact.name);
          return obj;
  
        }, {});
  
      }
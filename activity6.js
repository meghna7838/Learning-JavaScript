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
  
  

  

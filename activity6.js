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
  
  

  

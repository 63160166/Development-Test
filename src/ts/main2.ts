interface Question {
    question: string;
    choices: string[];
    correctAnswer: number;
  }
   
  const questions: Question[] = [
    {
      question: 'What is the output of the following code?\n\nconsole.log(typeof null);',
      choices: ['"object"', '"null"', '"undefined"', '"boolean"'],
      correctAnswer: 0,
    },
    {
      question: 'Which method is used to add one or more elements to the end of an array?',
      choices: ['push()', 'join()', 'slice()', 'concat()'],
      correctAnswer: 0,
    },
    {
      question: 'What is the result of the following expression?\n\n3 + 2 + "7"',
      choices: ['"327"', '"12"', '"57"', '"NaN"'],
      correctAnswer: 2,
    },
    {
      question: 'What is the purpose of the "use strict" directive in JavaScript?',
      choices: ['Enforce stricter type checking', 'Enable the use of modern syntax', 'Enable strict mode for improved error handling', 'Disable certain features for better performance'],
      correctAnswer: 2,
    },
    {
      question: 'What is the scope of a variable declared with the "let" keyword?',
      choices: ['Function scope', 'Global scope', 'Block scope', 'Module scope'],
      correctAnswer: 2,
    },
    {
      question: 'Which higher-order function is used to transform elements of an array into a single value?',
      choices: ['map()', 'filter()', 'reduce()', 'forEach()'],
      correctAnswer: 2,
    },
    {
      question: 'What does the "=== " operator in JavaScript check for?',
      choices: ['Equality of values', 'Equality of values and types', 'Inequality of values', 'Reference equality'],
      correctAnswer: 1,
    },
    {
      question: 'What is the purpose of the "this" keyword in JavaScript?',
      choices: ['Refer to the current function', 'Refer to the parent function', 'Refer to the global object', 'Refer to the object that owns the current code'],
      correctAnswer: 3,
    },
    {
      question: 'What does the "NaN" value represent in JavaScript?',
      choices: ['Not a Number', 'Null', 'Negative Number', 'Not Applicable'],
      correctAnswer: 0,
    },
    {
      question: 'Which method is used to remove the last element from an array?',
      choices: ['pop()', 'shift()', 'slice()', 'splice()'],
      correctAnswer: 0,
    },
  ];

  const div1 = document.getElementById('exercise2') as HTMLDivElement

  if (div1){
    
    let score = 0;
    const Div = document.createElement('div')
    Div.innerText = 'Current Score: ' + score + '/10'
    div1.appendChild(Div)
    
    for (let i = 0; i < questions.length; i++ ){
      const question = questions[i];
      const question1 = document.createElement('div')
      const question2 = document.createElement('p')
      question2.innerText = question.question
      question1.appendChild(question2)
      // choice
      const choices = document.createElement('div')
      for (let choice1 = 0; choice1 < question.choices.length; choice1++){
        const choice = question.choices[choice1]
        const label = document.createElement('label')
        const input = document.createElement('input')
        const br = document.createElement('br')
        input.type = 'radio'
        input.name = `question${i}`
        input.value = choice1.toString()
        label.appendChild(input)

        const span = document.createElement('span')
        span.innerText = choice
        label.appendChild(span)
        label.appendChild(br)
        choices.appendChild(label)
       
      }
      question1.appendChild(choices)
      const button = document.createElement('button')
      button.innerText = 'Submit'
      question1.appendChild(button)
      button.addEventListener("click", () =>{ 
        const Answer = document.querySelector(`input[name=question${i}]:checked`) as HTMLInputElement
      
      if (Answer){
    const Answer1 = parseInt(Answer.value)
      if (Answer1 === question.correctAnswer){
        score++
        Div.innerText = `Current Score: ${score}/10`
        result.innerText ='Correct!'
      }else{
        result.innerText ='Incorrect!'
      }
      button.disabled = true
  }else{
    alert("Please choose an answer first!")
    return;
  }
}) 
const result = document.createElement("p");
  question1.appendChild(result)
  div1.appendChild(question1)
    }
  }
export{}


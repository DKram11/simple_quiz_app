const quizData = [
  {
    question: "When do javascript created?",
    choices: ["1992", "1993", "1994", "1995"],
    answer: "1995",
  },
  {
    question: "Who own Java in year 1998?",
    choices: ["James Goslings","Jonathan Majors","Samantha Miller", "Manny Pacquiao"], 
    answer: "James Goslings",
  },
  {
    question: "Who invented javascript in year 1995?",
    choices: ["James Yap", "Brendan Eich","Arturo Cruz", "Ramon James"],
    answer: "Brendan Eich",
  }
]

const questionElement = document.getElementById('question');
const choiceElement = document.getElementById('choices');

const quizResult = document.getElementById('result');
const nextBtn = document.querySelector('.next');

const quiz = document.addEventListener("DOMContentLoaded", 
  function() {


    let currentQuiz = 0;
    let score = 0;

    function loadQuestion() {
      
      const currentQuizData = quizData[currentQuiz];

      questionElement.textContent = currentQuizData.question;


      
      const div = document.createElement('div');
      div.classList.add('choiceList');
      choiceElement.appendChild(div);
      const ul = document.createElement('ul');
      div.appendChild(ul);

      console.log(div)

      currentQuizData.choices.forEach((choice) => {
        
        const choiceList = document.createElement('li');
        ul.appendChild(choiceList);
      
        console.log(choiceList)
      
        choiceList.textContent = choice; 
        
        choiceList.addEventListener("click", () => {
          selectOption(choice);
        })
      })

    
    }

    function selectOption(selectedChoice) {

      const currentQuizData = quizData[currentQuiz];

      if(selectedChoice === currentQuizData.answer) {
        score++;
        console.log(score)
        
      } else {
        console.log("no points")
      }

      currentQuiz++;  
      if(currentQuiz < quizData.length) {
        choiceElement.innerHTML = '';

        loadQuestion();

      } else {
        console.log("Quiz Done!");
        result();
      }
    }

    function nextQuiz() {
      currentQuiz++;  
      if(currentQuiz < quizData.length) {
        choiceElement.innerHTML = '';

        loadQuestion();

      } else {
        console.log("Quiz Done!");
        result();
      }
    }
    nextBtn.addEventListener('click', () => {
      nextQuiz();
    })



    function result() {
      quizResult.style = "display: flex";
      nextBtn.style = 'display: none';
      
      questionElement.textContent = '';
      choiceElement.textContent = '';
      
      let result = document.createElement('h1');
      quizResult.appendChild(result);

      result.innerHTML = `Your final score is <br> ${score} out of ${quizData.length}`;

    }


    loadQuestion();
})
//https://stackoverflow.com/questions/66308020/how-to-add-a-score-function-to-my-quiz-using-javascript

const clockElement = document.querySelector("#clock")
const questionElement = document.querySelector(".controls")
const startButton = document.querySelector("#start-btn")
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionButtons = document.getElementsByClassName('question-btn')
const answerButtonElement = document.getElementById('answer-button')
const highscoreButton = document.getElementById('highscore-btn')
const SCORE_POINTS = 100
console.log(questionButtons);
let shuffledQuestions 
let currentQuestionIndex = 0

let rightAnswers = 0
console.log(rightAnswers)

const question = [
  {
    numb:1,
    question: "Inside which HTML element do we put the JavaScript?",
  answer: [
    { text: '<script>', isCorrect: true},
    { text: '<scripting>', isCorrect: false},
    { text: '<javascript>', isCorrect: false},
    { text: '<js>', isCorrect: false }
  ]
  //correctAns: '<script>'
  },
  {
    numb:2,
    question: 'What is the correct syntax for referring to an external script called "xxx.js"',
  answer: [
    { text: '<script name="xxx.js">', isCorrect: false },
    { text: '<script href="xxx.js">', isCorrect: false },
    { text: '<script scr="xxx.js">', isCorrect: true },
    { text: '<scr href="xxx.js">', isCorrect: false }]
  },
    {
      numb:3,
      question: 'How do you write "Hello World" in an alert box?',
    answer: [
      { text: 'msg("Hello World");', isCorrect: false },
      { text: 'msgBox("Hello World");', isCorrect: false },
      { text: 'alertBox("Hello World");', isCorrect: false },
      { text: 'alert("Hello World");', isCorrect: true }
      ]
    },
    {
      numb:4,
      question: "Where is the correct place to insert a JavaScript",
    answer:[
      { text: "The <body> section", isCorrect: false },
      { text: "The <head> section", isCorrect: false },
      { text: "Both the <head> section and the <body> section are correct", isCorrect: true },
      { text: "Your pant's pocket", isCorrect: false }
      ]
    },
    {
      numb:5,
      question: "How do you create a function in JavaScript",
    answer:[
      { text: "function:myFunction()", isCorrect: false },
      { text: "function = myFunction()", isCorrect: false },
      { text: "function myFunction()", isCorrect: true },
      { text: "function + myFunction()", isCorrect: false }
      ]
    }
]
function showQuestion(index) {
 // console.log(question[currentQuestionIndex])
 questionElement.innerText = question[currentQuestionIndex].question
 // console.log(question)
//console.log(questionButtons)
  question[currentQuestionIndex].answer.forEach((answer, index) => {
   // console.log(answer)
    questionButtons[index].innerText = answer.text
    questionButtons[index].dataset.correct = answer.isCorrect
//    if (answer.correct) {
//    }
//    answerButtonElement.appendChild(button)

})
}

questionContainerElement.onclick = selectAnswer;
 function setNextQuestion() {
  // resetState()
  for (let i = 0; i < question.length; i++) {
    showQuestion(question[i])
  }
}

function clock() {
  var sec = 50;
  let stopTimer = setInterval(function() {
    document.getElementById("clock").innerHTML = sec;
    sec--;

//console.log(sec)
      if (sec <= 0 ) {
        sec = 0;
        clearInterval(stopTimer);
        stopQuiz();
      }
     }, 1000);
}

function startGame() {
  clock()
console.log("started");
nextButton.classList.remove('hide')
startButton.classList.add('hide')
//currentQuestionIndex++
questionContainerElement.classList.remove('hide')
showQuestion()
}


function stopQuiz() {
  location.href = "save.html";
}







function resetState() {
  clearStatuesClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild)
  }
}

function selectAnswer(e) {
 // console.log("I picked",())
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  //console.log(correct);
  if (correct === true){
    rightAnswers+1
  }
  console.log(rightAnswers)
  //console.log(currentQuestionIndex)
  currentQuestionIndex++
  console.log(currentQuestionIndex);
  showQuestion()
//   return
// setStatusClass(document.body, correct)
// if(selectedButton === correct){
//  // incrementScore(SCORE_POINTS)
// }
// answerButtonElement.parentElement.classList.add(classToApply)
// Array.from(answerButtonElement.children).forEach(button => {
//   setStatusClass(button, button.dataset.correct)
// })
// if (shuffledQuestions.length > currentQuestionIndex + 1){
// nextButton.classList.remove('hide')
// } else {
//  startButton.innerText = 'restart'
//  startButton.classList.remove('hide')
// }
}

function setStatusClass(element, correct) {
  clearStatuesClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatuesClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  //currentQuestionIndex++
  showQuestion()
})
  
// const questions = getElementById(question)
// const questions = [0,1,2,3,4]

  
 
 


// function randomize (obj){
//   const index;
//   const temp;
//   for (let i = obj.length - 1; i > 0; i--) {
//     index = Math.floor((Math.random() * i));
//     temp = obj[index];
//     obj[index] = obj[i];
//     obj[i] = temp;
//   }

//   for (i = 0; i < obj.length; i++){
//     console.log(obj[i].question + ":" + obj[i].answer);
//   }
//   return obj
// }


// let x = document.querySelector("#answer-buttons");

// x.addEventListener('click', (event) => {
//   let element = event.target.textContent;
//   console.log(element);
// })

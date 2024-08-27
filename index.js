const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<js>", correct: false },
      { text: "<javascript>", correct: false },
      { text: "None", correct: false },
    ]
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      { text: "head section", correct: false },
      { text: "body section", correct: true },
      { text: "both", correct: false },
      { text: "None", correct: false },
    ]
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",

    answers: [
      { text: "True", correct: false},
      { text: "False", correct: true },
      { text: "both", correct: false },
      { text: "None", correct: false },
    ]
  },
  {
    question: "How we comment a single line in javascript?",

    answers: [
      { text: "<!--!>", correct: false },
      { text: "'", correct: false },
      { text: "//", correct: true },
      { text: "None", correct: false },
    ]
  },
  {
    question: "Is javascript case-sensitive",

    answers: [
      { text: "False", correct: false },
      { text: "Both", correct: false },
      { text: "None", correct: false },
      { text: "True", correct: true },
    ]
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0; 
 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }
 function showQuestion() {
     resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        // button.addEventListener("click")

        if(answer.correct){
           button.dataset.correct = answer.correct;
       }
        button.addEventListener("click" , selectAnswer);
     });
  }
  function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
  }
  function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
  }
  nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
  });
  
//  function resetState(){
//     nextButton.style.display = "none";
//     while(answerButton.firstChild){
//         answerButton.removeChild(answerButton.firstChild);
//     }
//  }
//  function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButton.children).forEach(button => {
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     }
//     );
//     nextButton.style.display = "block";
//  }
//  function showScore(){
//     resetState();
//     questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
//     nextButton.innerHTML = "Play Again";
//     nextButton.style.display = "block";
//  }
//  function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }
//  }
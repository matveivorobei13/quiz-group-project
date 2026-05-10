const quiz = [
  {
    question: "Столица Франции?",
    answers: ["Берлин", "Париж", "Мадрид", "Рим"],
    correct: 1
  },
  {
    question: "2 + 2 = ?",
    answers: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "Цвет неба?",
    answers: ["Зелёный", "Синий", "Красный", "Жёлтый"],
    correct: 1
  },
  {
    question: "HTML — это?",
    answers: ["Язык", "База", "Сервер", "ОС"],
    correct: 0
  },
  {
    question: "JS — это?",
    answers: ["Стиль", "Язык", "Браузер", "Файл"],
    correct: 1
  },
  {
    question: "CSS нужен для?",
    answers: ["Логики", "Стилей", "Базы", "Сервера"],
    correct: 1
  }
];

function wait(ms){
  return new Promise((resolve, reject) => {
     setTimeout(function(){
            resolve()
        }, ms)
  })
}
const start=document.querySelector("#greatings_div button")
start.addEventListener("click", async function(){
   anime({
    targets: "#greatings_div",
    opacity: 0,
    duration: 400,
    
  })
  await wait(400)
  document.querySelector("#greatings_div").style.display="none"

  document.querySelector("#test_div").style.display="flex"
  anime({
    targets: "#test_div",
    opacity: 1,
    translateY: 0,
    duration: 400,
    
  })

})
const question_tag = document.querySelector("#test_div p")

const buttons = document.querySelectorAll("#test_div button")
console.log(buttons)

function displayQuestion(number_question) {
      question_tag.innerHTML = quiz[number_question].question
      buttons[0].innerHTML = quiz[number_question].answers[0]
      buttons[1].innerHTML = quiz[number_question].answers[1]
      buttons[2].innerHTML = quiz[number_question].answers[2]
      buttons[3].innerHTML = quiz[number_question].answers[3]
}

let current_question = 0
let right_answers = 0

displayQuestion(current_question)

for(let i=0; i === buttons.length - 1; i++){
  buttons[i].addEventListener('click', function(){
    if(buttons[i].innerHTML === quiz[current_question].answers[quiz[current_question].correct]){
      right_answers++
    }
    if(current_question === quiz.length - 1){
      pass
    }
    else{
      current_question++
      displayQuestion(current_question)
    }
  })
}








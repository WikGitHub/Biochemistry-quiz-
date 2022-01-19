const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

/*what happens when you click the 'start' button*/
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5) /*shuffles Qs*/
  currentQuestionIndex = 0 /* to start on first Q*/
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

/*what happens when you click the 'next' button*/
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

// make this only appear in the scoreboard final 
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

/*what happens when you select an answer*/
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    //show score here 
    startButton.innerText = 'Restart' //restart button is here 
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// code for questions 
const questions = [
  {
    question: 'Structurally RNA and DNA are fully identical:',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },

  {
    question: 'Purines are:',
    answers: [
      { text: 'Adenine & Cytosine', correct: false },
      { text: 'Guanine & Thymine', correct: false },
      { text: 'Adenine & Guanine', correct: true },
      { text: 'Guanone & Cytosine', correct: false }
    ]
  },

  {
    question: 'Which of the following has the beads on a string structure?:',
    answers: [
      { text: 'Nucleosome', correct: true },
      { text: 'Chromosome', correct: false },
      { text: 'Chromatin', correct: false },
      { text: 'Heterochromatin', correct: false }
    ]
  },

  {
    question: 'Which position of a codon is said to wobble?:',
    answers: [
      { text: 'First', correct: false },
      { text: 'Second', correct: false },
      { text: 'Third', correct: true },
      { text: 'Fourth', correct: false }
    ]
  },

  {
    question: 'Total tield of ATP in respiration is:',
    answers: [
      { text: '2', correct: false },
      { text: '32', correct: false },
      { text: '36', correct: true },
      { text: '34', correct: false }
    ]
  },

  {
    question: 'Short polypeptides are called:',
    answers: [
      { text: 'Polypeptides', correct: false },
      { text: 'Primary structures', correct: false },
      { text: 'Secondary structures', correct: false },
      { text: 'Oligopeptides', correct: true }
    ]
    }
]

function score() {
  if (answer.correct) {
    score =+ 1
  }
}


// code for score 
// code for restart? 
// in the HTML do i need to add 'answer 5' etc...

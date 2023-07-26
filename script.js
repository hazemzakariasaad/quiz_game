"use strict";

const question1 = {
  question: "What is the capital of France?",
  options: ["Paris", "Berlin", "London", "Rome"],
  answer: 0,
};
const question2 = {
  question: "Which planet is known as the Red Planet?",
  options: ["Venus", "Mars", "Jupiter", "Saturn"],
  answer: 1,
};
const question3 = {
  question: "What is 2 + 2?",
  options: ["3", "4", "5", "6"],
  answer: 1,
};
const question4 = {
  question: "What is the chemical symbol for water?",
  options: ["H2O", "CO2", "NaCl", "O2"],
  answer: 0,
};
const question5 = {
  question:
    "Which famous scientist discovered the theory of general relativity?",
  options: [
    "Isaac Newton",
    "Albert Einstein",
    "Galileo Galilei",
    "Nikola Tesla",
  ],
  answer: 0,
};
const question6 = {
  question: "Which mammal can fly?",
  options: ["Bat", "Elephant", "Giraffe", "Hippo"],
  answer: 0,
};
const question7 = {
  question: "What is the largest planet in our solar system?",
  options: ["Venus", "Mars", "Jupiter", "Saturn"],
  answer: 2,
};
const btnnew = document.querySelector(".btn--new");
const questionElement = document.getElementById("question-text");
const optionsElements = document.getElementsByClassName("option");
const resultElement = document.getElementById("result");
const questionCountElement = document.getElementById("question-count");
const main = document.querySelector(".main");
const start = document.querySelector(".start");
const startt = document.querySelector(".startt");
let currentQuestion = 0;
let score = 0;
const questions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
];

function loadQuestion() {
  updateQuestionCount();
  if (currentQuestion < questions.length) {
    questionElement.innerText = questions[currentQuestion].question;
    for (let i = 0; i < optionsElements.length; i++) {
      optionsElements[i].innerText = questions[currentQuestion].options[i];
    }
  } else {
    showResult();
  }
}
function checkAnswer(optionIndex) {
  if (optionIndex === questions[currentQuestion].answer) {
    score++;
  }
  if (currentQuestion < questions.length) currentQuestion++;
  loadQuestion();
}

const optionButtons = document.querySelectorAll(".option");

// Loop through the buttons and add event listeners
optionButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    checkAnswer(index);
  });
});

function showResult() {
  resultElement.innerHTML = `You scored ${score} out of ${questions.length} questions.`;
}

function updateQuestionCount() {
  questionCountElement.innerText = `Question ${
    currentQuestion == 7 ? currentQuestion : currentQuestion + 1
  } of ${questions.length}`;
}
loadQuestion();
start.addEventListener("click", function (e) {
  main.classList.remove("hidden");
  start.classList.add("hidden");
  startt.classList.add("hidden");
});
btnnew.addEventListener("click", function (e) {
  currentQuestion = 0;
  score = 0;
  resultElement.innerHTML = " ";
  loadQuestion();
});

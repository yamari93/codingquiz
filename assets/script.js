//Global Variables

let startQuizBtn = document.querySelector("#startQuiz");
let questionDiv = document.querySelector("#questions");
let timerDiv = document.querySelector(".timer");
let questions = [
  { title: "What is the capital of Illinois?", choices: ["Des Moines", "Indianapolis", "Springfield", "Lincoln"], answer: "Springfield" },
  { title: "Helena is the capital of which State?", choices: ["Montana", "New Hampshire", "Mississipi", "North Carolina"], answer: "Montana" },
  { title: "What is the capital of Kansas?", choices: ["Frankfort", "Topeka", "Augusta", "Olympia"], answer: "Topeka" },
  { title: "Cheyenne is the capital of which State?", choices: ["Utah", "Oklahoma", "South Dakota", "Wyoming"], answer: "Wyoming" },
  { title: "What is the capital of Oregon?", choices: ["Harrisburg", "Salem", "Pierre", "Salt Lake City"], answer: "Salem" },
];
let timerCount = 60;
let questionsIndex = 1;
//Functions
function startQuiz() {
  timerDiv.innerText = timerCount;
  setInterval(function () {
    timerCount -= 1;
    timerDiv.innerText = timerCount;
  }, 1000);
  createButtons(0);
  //question 1
}
function createButtons(index) {
  //cycle questions through buttons
  let title = document.createElement("h2");
  title.textContent = questions[index].title;
  questionDiv.appendChild(title);

  //add 4 choices
  let btnOne = document.createElement("button");
  btnOne.textContent = questions[index].choices[0];
  btnOne.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnOne);

  let btnTwo = document.createElement("button");
  btnTwo.textContent = questions[index].choices[1];
  btnTwo.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnTwo);

  let btnThree = document.createElement("button");
  btnThree.textContent = questions[index].choices[2];
  btnThree.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnThree);

  let btnFour = document.createElement("button");
  btnFour.textContent = questions[index].choices[3];
  btnFour.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnFour);

  //let resultsDiv = document.createElement("div");
  //make options clickable buttons
}

function gameOver() {
  questionDiv.innerHTML = "";
  resultsDiv.textContent = "GAME OVER";
  clearInterval(timer);
  questionsIndex = 0;
  //createButtons(questionsIndex);
  let again = document.createElement("button");
  again.textContent = "Would you like to play again?";
  playAgainbtn.appendChild(again);

  let enterBox = document.createElement("Input");
  enterBox.setAttribute("placeholder", "Enter Initials");
  nameBox.appendChild(enterBox);

  let submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitDiv.appendChild(submitBtn);

  let element = document.getElementById("questions");
  element.remove();
}

function submitName() {
  localStorage.setItem("score", timerCount);
}
//check what the user clicked
function checkAnswer() {}

//Function calls
startQuizBtn.addEventListener("click", startQuiz);
//questionDiv.addEventListener("click", checkAnswer);

questionDiv.addEventListener("click", function (event) {
  console.log(event);
  let choice = event.target.innerHTML;
  let answer = event.target.dataset.answer;
  let resultsDiv = document.createElement("div");
  //if (questionsIndex);
  if (choice === answer) {
    resultsDiv.textContent = "CORRECT!";
    questionDiv.appendChild(resultsDiv);
  } else {
    resultsDiv.textContent = "WRONG!";
    questionDiv.appendChild(resultsDiv);
    timerCount -= 5;

    if (timerCount == 0) {
      gameOver();
      //TODO clearinterval
    }
  }
  //questionsIndex++;
  if (questionsIndex < questions.length - 1) {
    questionsIndex++;
    createButtons(questionsIndex);
  } else {
    questionDiv.innerHTML = "";
    gameOver();
  }
});

//submitDiv.addEventListener("click", submitName);

//playAgainbtn.addEventListener("click", startQuiz);

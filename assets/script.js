// DEFINING MY VARIABLES
var startButton = document.querySelector("#start");
var goBack = document.querySelector("#back");
var userQuiz = document.querySelector("#quiz");
var userQuestion = document.querySelector("#question");
var correctAnswer = document.querySelector("#answer");
var optionOne = document.querySelector("#one");
var optionTwo = document.querySelector("#two");
var optionThree = document.querySelector("#three");
var optionFour = document.querySelector("#four");
var highScores = document.querySelector("#high-scores");
var restart = document.querySelector("#restart")

// DEFINING GLOBAL VARIABLES
var timer;
var timerCount;
var userAnswer;

// QUESTIONS FOR THE QUIZ
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ______.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store ______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        optionOne: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        optionOne: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

// LOCAL STORAGE
currentScore = localStorage.getItem("current-score")
currentHighScore = localStorage.getItem("current-high-score")
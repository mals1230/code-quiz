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
var highScore = document.querySelector("#high-score");
var restart = document.querySelector("#restart")

// DEFINING GLOBAL VARIABLES
var timer;
var timerCount;
var userAnswer;

// QUESTIONS FOR THE QUIZ
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        optionOne: "strings", 
        optionTwo: "booleans", 
        optionThree: "alerts", 
        optionFour: "numbers",
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ______.",
        optionOne: "quotes", 
        optionTwo: "curly brackets", 
        optionThree: "parentheses", 
        optionFour: "square brackets",
        answer: "parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store ______.",
        optionOne: "numbers and strings", 
        optionTwo:"other arrays", 
        optionThree:"booleans", 
        optionFour:"all of the above",
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        optionOne: "commas", 
        optionTwo: "curly brackets", 
        optionThree: "quotes", 
        optionFour: "parenthesis",
        answer: "quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        optionOne: "Javascript", 
        optionTwo: "terminal / bash", 
        optionThree: "for loops", 
        optionFour: "console log",
        answer: "console log"
    },

];

// LOCAL STORAGE
currentScore = localStorage.getItem("current-score")
currentHighScore = localStorage.getItem("current-high-score")
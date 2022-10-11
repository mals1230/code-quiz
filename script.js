// QUESTIONS FOR THE QUIZ
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ______.",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "3. parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store ______.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "3. quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["1. Javascript", "2. terminal / bash", "3. for loops", "4. console log"],
        answer: "4. console log"
    },

];

// DEFINING MY VARIABLES
var score = 0;
var questionIndex = 0;
var timer = document.querySelector("#timer");
var startQuiz = document.querySelector("#startQuiz");
var questions = document.querySelector("#questions");
var body = document.querySelector("#body")
var secondsLeft = 76
var holdInterval = 0
var penalty = 10
var ulCreate = document.createElement("ul")

// STARTING QUIZ AND SETTING TIMER
startQuiz.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            timer.textContent = "Time Left: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                timer.textContent = "Time's Up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// RENDERING THE QUESTIONS
function render(questionIndex) {
    questions.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < quizQuestions.length; i++) {
        var userQuestion = quizQuestions[questionIndex].question;
        var userChoices = quizQuestions[questionIndex].choices;
        questions.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questions.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

// COMPARING USERS ANSWER TO THE CORRECT ANSWER 
function compare(event) {
    var element = event.target;
    if (element.matches ("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (element.textContent == quizQuestions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct!";
        } else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong!"
        }
    }
    questionIndex++;
    if (questionIndex >= quizQuestions.length) {
        allDone();
    } else {
        render(questionIndex);
    }
    questions.appendChild(createDiv);
}

// QUIZ IS DONE, CALCULATE AND SAVE USERS INITIALS AND SCORE
function allDone() {
    questions.innerHTML = "";
    timer.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"
    questions.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");
    questions.appendChild(createP);

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;
        questions.appendChild(createP2);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter initials:";
    questions.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";
    questions.appendChild(createInput);

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "submit");
    createSubmit.textContent = "submit";
    questions.appendChild(createSubmit);

    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;
        if (initials === null) {
            console.log("Please enter your initials!");
        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            window.location.replace("./scores.html");
        }
    });

}
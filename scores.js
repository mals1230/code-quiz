// DELCARING MY VARIABLES
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// CLEAR SCORES 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// PULLING SCORES FROM LOCAL STORAGE
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createList = document.createElement("li")
        createList.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createList);
    }
}

// GOING BACK TO INDEX.HTML
goBack.addEventListener("click", function () {
    window.location.replace("./index.html")
});
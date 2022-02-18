// Main-menu Buttons

//Variables

var strBtn = document.getElementById("start");
var crtBtn = document.getElementById("credits");
var mainMenu = document.getElementById("main-menu");
var gameMenu = document.getElementById("gS");

// Game Win Variables

var playAgain = document.getElementById("bGS");
var backMain = document.getElementById("bMain");


const body = document.body;

strBtn.addEventListener('click', function(){
    body.classList.toggle('show');

    gameMenu.style.display = "flex";

    mainMenu.style.display = "none";

    creditsScreen.style.display = "none";

    gameWin.style.display = "none";

});

crtBtn.addEventListener('click', function () {
    body.classList.toggle('show');

    creditsScreen.style.display = "flex";

    gameMenu.style.display = "none";

    mainMenu.style.display = "none";

    gameWin.style.display = "none";
    
})


//Game Win Screen

playAgain.addEventListener('click', function() {
    body.classList.toggle('show');

    gameMenu.style.display = "flex";

    gameWin.style.display = "none";
    
    creditsScreen.style.display = "none";

    mainMenu.style.display = "none";

    guessNum = 0;
    document.getElementById("userInput").value = " "; 
    rng = Math.floor(Math.random() * 100) + 1;
    mText.innerHTML = "Try and guess the number, traveller.";

})


backMain.addEventListener('click', function () {
    body.classList.toggle('show');

    mainMenu.style.display = "flex";

    gameWin.style.display = "none";
    
    creditsScreen.style.display = "none";

    gameMenu.style.display = "none";

    guessNum = 0;
    document.getElementById("userInput").value = " "; 
    rng = Math.floor(Math.random() * 100) + 1;
    mText.innerHTML = "Try and guess the number, traveller.";

})

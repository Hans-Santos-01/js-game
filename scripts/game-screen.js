
// Variables
var mText = document.getElementById("mText");
var gameMenu = document.getElementById("gS");
var gameWin = document.getElementById("gW");
var creditsScreen = document.getElementById("cS");
var gameWintext = document.getElementById("gWt");


    // Random Number Generator
var rng = Math.floor(Math.random() * 100) + 1; 
    // Guess Count
var guessNum = 0;


// Guess Click
document.getElementById("submit").onclick = function(){ 
      
    // number guessed by user  
    var userInput = document.getElementById("userInput").value;
    
   
    if(userInput == rng) 
    {    

        if (guessNum == 1) {
           gameWintext.innerHTML = "CONGRATULATIONS!!! You guessed it the first time!!!";
        }
        
        else if (guessNum < 5) {
            gameWintext.innerHTML = "NICE! it took you " + guessNum + " tries. Not bad!";
        }

        else if (guessNum > 5) {
            gameWintext.innerHTML = "Good! it took you " + guessNum + " tries. You can do better next time!";
        }
        
        gameWin.style.display = "flex";
        gameMenu.style.display = "none";
        creditsScreen.style.display = "none";

    } 

    else if(userInput > rng)
    {     
        guessNum++; 
        mText.innerHTML = "Oops SORRY!! Try a smaller number. " + "you made " + guessNum + " guess so far."; 
        
        if (userInput > 100) {
            mText.innerHTML = "You have entered an invalid data! Try again." + "you made " + guessNum + " guess so far.";  
        }

    } 
    
    else if (userInput < rng)
    { 
        guessNum++; 
        mText.innerHTML = "Oops SORRY!! Try a greater number. " + "you made " + guessNum + " guess so far.";

        if (userInput < 0) {
            mText.innerHTML = "You have entered an invalid data! Try again. " + "you made " + guessNum + " guess so far." ;  
        }

    }

    else if (userInput.trim() == "" && userInput == null)   {
        mText.innerHTML = "You have entered an invalid data! Try again. " + " you made " + guessNum + " guess so far.";
    }

    else 
    {
       guessNum++;
       mText.innerHTML = "You have entered an invalid data! Try again. " + " you made " + guessNum + " guess so far.";  
    }  

  
    
}





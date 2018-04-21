



//VARIABLES NEEDED
var game = ["CANADA", "MEXICO", "JAPAN", "GERMANY","SPAIN"];
var choice = Math.floor(Math.random()* 5);
var answer = game[choice];
var myLength = answer.length;
var display = [myLength];
var win = myLength;
var letters = answer.split("");
var attemptsLeft = 10;
var output = "";
var userLetter = "";



//function to set up the start of the game
var setup = function() {
    for (i=0; i < answer.length; i++) {
        display[i] = "_ "
        output = output + display[i];

        
    }
    document.getElementById("word").innerHTML = output;
    output = "";

}
// onkey function to check to see if the letter you pushed is in word
document.onkeyup = function(event)
{
    userLetter = event.key;
    

    //for look to search if the event key matches a letter in the answer
    for (c = 0; c < answer.length; c++)
    {
        if (userLetter.toUpperCase() == letters[c])
        {
        display[c] = userLetter.toUpperCase();
        win--;
        

        }
       
            
        
        output = output + display[c] + " ";
        
    }
    document.getElementById("word").innerHTML = output;
    output = "";
    attemptsLeft--;
    
    //if statement to set the rules of the game

    if (win < 1)
    {
        document.getElementById("guesses").innerHTML = "YOU WIN!!";

    }
    else if (attemptsLeft < 1)
    {
        document.getElementById("guesses").innerHTML = "YOU LOSE";
    }
    else 
    {
        document.getElementById("guesses").innerHTML = "You Have " +
        attemptsLeft + " guesses left";  
    }
}
//to load the setup function at the start of the game
window.onload = function() {
    setup();
}


    
    
    











//computer needs to pick an answer


//score keeping on html








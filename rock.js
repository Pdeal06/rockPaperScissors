/*
What I'm creating is a script that allows someone to play Rock, Paper, Scissors against the computer 
in the console. The script should take a user prompt of 1 of the choices compare it against the randomized 
choice by the computer and determine the winner. Eventually, they want a 5 round game that keeps score and 
prints who the winner is in the end. 



*/

/*
Create function called computerPlay
Use random method to pick a number between 100
Create variables cpuRock, cpuPaper, and cpu Scissors
Make conditional where 1-33 is Rock, 34-66 is Paper, 67-100 is Scissors 
*/

function computerPlay() {
     let cpuRPS = Math.floor(Math.random() *100) + 1;
    if (cpuRPS <= 33){
        return 'Rock'  
    }
    else if (cpuRPS <= 66){
        return 'Paper'

    }
    else { 
        return 'Scissors'
    }
}

function playerPlay() {
    let playerChoice = prompt('Rock? Paper? Scissors?');
    let playerChoicefix = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    
    if (playerChoicefix === 'Rock' || 'Paper' || 'Scissors'){
        return playerChoicefix
    } else {
        return 'Not an option'
    }



} 


/* My next goal is to write a function that plays a round of RPS. My function will have two parameters
playerSelection and computerSelection. Plus, it will return a string declaring the winner. At this point, I've
decided to rearrange the steps some. I'm going to write the prompt for user input first which will allow
that function to be used here. */
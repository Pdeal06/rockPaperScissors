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
    
    if (playerChoicefix === 'Rock' || playerChoicefix === 'Paper' || playerChoicefix === 'Scissors'){
        return playerChoicefix
    } else {
        console.log('Not an option')
        return playerPlay()
    }



} 


/* My next goal is to write a function that plays a round of RPS. My function will have two parameters
playerSelection and computerSelection. Plus, it will return a string declaring the winner. At this point, I've
decided to rearrange the steps some. I'm going to write the prompt for user input first which will allow
that function to be used here. Done moving to the game.*/

function playRound(playerSelection = playerPlay(), computerSelection = computerPlay()) {
    let playerScore = 0
    let computerScore = 0

    /*Create conditional that declares winner
    Compare if playerPlay and computerPlay are equal
    Return string for tie*/
    if (playerSelection === computerSelection) {
        return "It's a Tie!"
    }
    //Other option playerPlay rock and computer Paper. return string for player loss//
    else if (playerSelection === "Rock" && computerSelection === 'Paper') {
        ++computerScore
         return "You Lose! Paper beats Rock!"
    }
    //Other option playerPlay rock computer Scissor. return player win//
    
    else if(playerSelection === "Rock" && computerSelection === 'Scissors') {
        ++playerScore
        return 'You Win! Rock beats Scissors!'
    }
    //Other option player paper computer rock player win//
    else if(playerSelection === "Paper" && computerSelection === 'Rock') {
        ++playerScore
        return 'You Win! Paper beats Rock!'
    } 
    //player paper computer scissor player loss//
    else if(playerSelection === "Paper" && computerSelection === 'Scissors') {
        ++computerScore
        return 'You Lose! Scissors beats Rock'
    }
    //player scissors computer rock player loss//
    else if(playerSelection === "Scissors" && computerSelection === 'Rock') {
        ++computerScore
        return 'You Lose! Rock beats Scissors!'
    }
    //player scissor computer paper player win//
    else if(playerSelection === "Scissors" && computerSelection === 'Paper') {
        ++playerScore
        return 'You Win! Scissors beat Paper!'
    }

    let score = [playerScore, computerScore]
    return score
    

/*Just gonna write out my thoughts until I have something usable. Game() is supposed to go for 5 rounds
and keep score. As well as report a winner in the end. I'm having trouble understanding how it will 
understand a winner. The loop for the playRound seems pretty straightforward. Final thought before sleep. 
Include score in playRound() So, what I want will be playRound to return a increase to player score or
cpu score. I'll make the variables for both initially, have each result option += those variables and then
the function as a whole will return the variables at the end*/



        
    






    
    
    
    
   
     
    
        

    

    
    
    
}
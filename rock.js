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
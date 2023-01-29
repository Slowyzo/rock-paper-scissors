/* loop the game 5x, but only sends last result*/

function game(){
    let i;
    for(i = 0; i < 5; i++){
        playRound();}

let userScore = 0;
let computerScore = 0;
let result = playRound();
  
/* Collect user choice from prompt and convert to lowercase */

function playRound(){

const userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
console.log(userChoice)

/* Generate computer choice randomly*/

let randomNumber = Math.floor(Math.random()*100) + 1;
let computerChoice;
if (randomNumber <= 33) {
    computerChoice = 'rock'
}
else if (randomNumber >= 67) {
    computerChoice = 'paper'
}
else computerChoice = 'scissors';

console.log(computerChoice)

/* Compare user and computer choice */

function compareChoice(choice1, choice2) {
    if (choice1 === choice2) {return 'Tie!'}
    else if (choice1 === 'rock')
        {if (choice2 === 'scissors') {return 'You win!'} 
        else {return 'Computer wins!'}}
    else if (choice1 === 'paper') 
        {if (choice2 === 'rock'){return 'You win!'} 
        else {return 'Computer wins!'}}
    else (choice1 === 'scissors') 
        {if (choice2 === 'paper'){return 'You win!'} 
        else {return 'Computer wins!'}};
}

/* Generate result and **SEND IT OUT OF NESTED FUNCTION!!***/

return compareChoice(userChoice, computerChoice);

}

console.log(result)

}

game ();


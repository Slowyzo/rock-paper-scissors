

let userScore = 0;
let computerScore = 0;
let userChoice;
let computerChoice;

function computerPlay(){
/* Collect user choice from prompt and convert to lowercase */
let randomNumber = Math.floor(Math.random()*100) + 1;
if (randomNumber <= 33) {
    computerChoice = 'rock'
}
else if (randomNumber >= 67) {
    computerChoice = 'paper'
}
else computerChoice = 'scissors'
console.log(computerChoice)
}

function playRound(userChoice, computerChoice){
userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
computerChoice = computerPlay();
console.log(userChoice)
    if (userChoice === computerChoice){console.log('Tie!')}
    else if (userChoice === 'rock' && computerChoice === 'scissors'){console.log('You win!')} 
    else if (userChoice === 'paper' && computerChoice === 'rock'){console.log('You win!')} 
    else if (userChoice === 'scissors' && computerChoice === 'paper'){console.log('You win!')}
    else {console.log('Computer wins!')};
    }

/* Generate result and print to console */
 function game(){
    let i;
    for(i = 0; i < 5; i++){
        playRound();}
        /*
    if(userScore > computerScore){
        alert('You won the game!')}
    else if(userScore < computerScore){
        alert('The computer beat you!')}
    else if(userScore === computerScore){
        alert('Tied game!')
    }*/
 }

 game();

 
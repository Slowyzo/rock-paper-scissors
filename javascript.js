
/* Generate computer choice randomly*/
let randomNumber = Math.floor(Math.random()*100) + 1;
console.log(randomNumber)

let computerChoice;
if (randomNumber <= 33) {
    computerChoice = 'rock'
}

else if (randomNumber >= 67) {
    computerChoice = 'paper'
}

else computerChoice = 'scissors';

console.log(computerChoice)

/* Collect user choice from prompt and convert to lowercase */
const userChoice = prompt("Rock, Paper, or Scissors").toLowerCase();

console.log(userChoice)

/* Computer user and computer choice (not working) */
let result;
function compareChoice () {
    if(userChoice === computerChoice)
    result = 'you tied!';
}

/* Print result to console */
console.log(result)

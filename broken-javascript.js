


let userScore = 0;
let computerScore = 0;

/* Collect user choice from prompt and convert to lowercase */


    let randomNumber = Math.floor(Math.random()*100) + 1;

    function computerPlay() {
    if (randomNumber <= 33) {
       computerChoice = 'rock'
        }
    else if (randomNumber >= 67) {
        computerChoice = 'paper'
        }
    else computerChoice = 'scissors';
    }
    

    function compareChoice(userChoice, computerChoice) {
    if (userChoice === computerChoice) {return 'Tie!'
        }
    else if (userChoice === 'rock')
        {if (computerChoice === 'scissors') {
            return 'You win!'
            userScore += 1} 
        else {return 'Computer wins!'
            computerScore += 1};
        }
    else if (userChoice === 'paper') 
        {if (computerChoice === 'rock') {
            return 'You win!'
            userScore += 1} 
        else {return 'Computer wins!'
        computerScore += 1};
    }
    else (userChoice === 'scissors') 
        {if (computerChoice === 'paper') {
            return 'You win!'
            userScore += 1} 
        else {return 'Computer wins!'
        computerScore += 1};
    }
    }

function game() {
        while ((userScore + computerScore) < 5) {
            let userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase()
            console.log(userChoice)
            let computerChoice = computerPlay()
            console.log(computerChoice)
            alert(compareChoice(userChoice, computerChoice))
        }
}

    console.log(userScore)
    console.log(computerScore)


/* Generate result and print to console */

/* count results to generate score */

/*
function winner () {
    if (userScore > computerScore){return 'You win the game!'}
    else if (userScore < computerScore){return 'Computer wins the game!'}
    else {return 'It was a tie!'};*/
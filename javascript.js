


let container = document.querySelector('.container');

let rockbtn = document.querySelector('#rockbtn');
rockbtn.addEventListener("click", () => rockPaperScissors('rock')); 

let paperbtn = document.querySelector('#paperbtn');
paperbtn.addEventListener("click", () => rockPaperScissors('paper')); 

let scissorsbtn = document.querySelector('#scissorsbtn');
scissorsbtn.addEventListener("click", () => rockPaperScissors('scissors'));   

let userScore = 0;
let computerScore = 0;

function rockPaperScissors(userChoice){

    let computerChoice = getComputerChoice();
    let winner;
    
    
    function getComputerChoice () {
            let randomNumber = Math.floor(Math.random()*100) + 1;
                if (randomNumber <= 33){return 'rock'
                }
                else if (randomNumber >= 67){return 'paper'
                }
                else {return 'scissors'}
        }
    
    
    function playRound (userChoice, computerChoice) { 
            if (userChoice === computerChoice){return winner = 'Tie!'}
            else if (userChoice === 'rock')
                {if (computerChoice === 'scissors'){return winner = 'You win!'} 
                else {return winner = 'Computer wins!'}}
            else if (userChoice === 'paper') 
                {if (computerChoice === 'rock'){return winner = 'You win!'} 
                else {return winner = 'Computer wins!'}}
            else (userChoice === 'scissors') 
                {if (computerChoice === 'paper'){return winner = 'You win!'} 
                else {return winner = 'Computer wins!'}};
        }
    
    
        function getScore(winner) {
            if (winner === 'Computer wins!'){computerScore++; 
                return computerScore;}
            else if (winner === 'You win!'){userScore++;
                return userScore;}
            else return;
        }
    
        console.log(userChoice);
        console.log(computerChoice);
        playRound(userChoice, computerChoice)
        console.log(winner);
        getScore(winner);
        console.log('Computer:' + computerScore);
        console.log('User:' + userScore);
    
    }
    

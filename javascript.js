let body = document.querySelector('body');
body.style.minHeight = '100vh';
body.style.display = 'flex';
body.style.flex = '1, 1, auto';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
body.style.padding = '20px';

let heading = document.querySelector('h1');

let container = document.querySelector('.container');
container.style.display = 'flex';
container.style.flex = '1, 0, auto'
container.style.gap = '20px';

let buttons = container.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.style.borderRadius = '10px'
})

let textdisplay = document.querySelector('.textdisplay');
textdisplay.style.border = '2px solid blue';
textdisplay.style.display = 'flex';
textdisplay.style.flexDirection = 'column';

let computer = document.querySelector('#computer');

let message = document.querySelector('#message');

let scoreboard = document.querySelector('.scoreboard');
scoreboard.style.border = '2px solid black';
scoreboard.style.display = 'flex';
scoreboard.style.flex = '1, 1, auto';
scoreboard.style.flexDirection = 'column';
scoreboard.style.padding = '20px';
scoreboard.style.alignItems ='center';

let container2 = document.querySelector('.container2');
container2.style.border = '2px solid red';
container2.style.display = 'flex';
container2.style.padding = '20px';

let box1 = document.querySelector('.window1');

let box2 = document.querySelector('.window2');

let rockbtn = document.querySelector('#rockbtn');
rockbtn.style.backgroundColor = 'tan';
rockbtn.style.color = 'white';
rockbtn.style.fontWeight = 'bold';
rockbtn.addEventListener("click", () => playRound('rock')); 

let paperbtn = document.querySelector('#paperbtn');
paperbtn.style.backgroundColor = 'darkgrey';
paperbtn.style.color = 'red';
paperbtn.style.fontWeight = 'bold';
paperbtn.addEventListener("click", () => playRound('paper')); 

let scissorsbtn = document.querySelector('#scissorsbtn');
scissorsbtn.style.backgroundColor = 'lightgrey';
scissorsbtn.style.color = 'blue';
scissorsbtn.style.fontWeight = 'bold';
scissorsbtn.addEventListener("click", () => playRound('scissors'));

let resetbtn = document.querySelector('#reset');
resetbtn.addEventListener("click", () => resetScore());

let gamebtn = document.querySelector('#game');
gamebtn.addEventListener("click", () => gameMode());

let choiceArray = [rockbtn, paperbtn, scissorsbtn];
let computerScore = 0;
let userScore = 0;
let winner;

function resetScore(){
    computerScore = 0;
    userScore = 0;

    box1.textContent = `Computer: ${computerScore}`;
    box2.textContent = `User: ${userScore}`;
    }

function gameMode(){
    console.log('Game mode!');
    resetScore();
    const scoreCheckEvent = scoreCheck;
    choiceArray.forEach(btn => {
        btn.addEventListener(
            "click", scoreCheckEvent)
        });

    function scoreCheck(){
            if (computerScore === 5){
                alert('Computer beat you!');
                endGame(); return} 
            else if (userScore === 5){
                alert('You won the game!'); 
                endGame(); return}
            else return;
        }

    function endGame(){
            resetScore();
            choiceArray.forEach(btn => {
                btn.removeEventListener(
                    "click", scoreCheckEvent)
            });

        }
    }

function playRound(userChoice){

    let computerChoice = getComputerChoice();
    
    function getComputerChoice () {
            const range = 100
            let randomNumber = Math.floor(Math.random()*range) + 1;
                if (randomNumber <= range/3){return 'rock'}
                else if (randomNumber >= range * (2/3)){return 'paper'}
                else {return 'scissors'}
        }
    
    function compareChoice (userChoice, computerChoice) { 
            if (userChoice === computerChoice){return winner = 'Tie!'}
            else if (userChoice === 'rock')
                {if (computerChoice === 'scissors'){return winner = 'You win!'} 
                else {return winner = 'Computer wins!'}}
            else if (userChoice === 'paper') 
                {if (computerChoice === 'rock'){return winner = 'You win!'} 
                else {return winner = 'Computer wins!'}}
            else if (userChoice === 'scissors') 
                {if (computerChoice === 'paper'){return winner = 'You win!'} 
                else {return winner = 'Computer wins!'}};
        }
    
    function getScore(winner) {
            if (winner === 'Computer wins!'){++computerScore; 
                return computerScore;}
            else if (winner === 'You win!'){++userScore;
                return userScore;}
            else return;
        }

        compareChoice(userChoice, computerChoice);
        getScore(winner);
        computer.textContent = `Computer chose: ${computerChoice}!`;
        box1.textContent = `Computer: ${computerScore}`;
        box2.textContent = `User: ${userScore}`;
        message.textContent = `${winner}`;
    }
    
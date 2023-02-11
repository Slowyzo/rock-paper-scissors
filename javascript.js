//CSS styling using DOM methods

let body = document.querySelector('body');
body.style.minHeight = '100vh';
body.style.display = 'flex';
body.style.flex = '1, 1, auto';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
body.style.padding = '20px';
body.style.backgroundImage = 'url(./images/sand-background.jpg)';

let heading = document.querySelector('h1');

let container = document.querySelector('.container');
container.style.display = 'flex';
container.style.gap = '20px';

let gamebuttons = container.querySelectorAll('button');
gamebuttons.forEach((btn) => {
    btn.style.borderRadius = '10px';
    btn.style.padding = '10px';
})

let textdisplay = document.querySelector('.textdisplay');
textdisplay.style.border = '2px solid slategrey';
textdisplay.style.borderRadius = '5px';
textdisplay.style.backgroundColor = 'white';
textdisplay.style.color = 'darkslategrey';
textdisplay.style.display = 'flex';
textdisplay.style.flexDirection = 'column';
textdisplay.style.minHeight = '80px';
textdisplay.style.minWidth = '300px';
textdisplay.style.maxWidth = '380px';
textdisplay.style.margin = '20px';
textdisplay.style.fontSize = '20px';
textdisplay.style.fontWeight = 'bold';
textdisplay.style.alignItems = 'center';
textdisplay.style.justifyContent = 'center';

let computer = document.querySelector('#computer');

let message = document.querySelector('#message');

let score = document.querySelector('.score');
score.style.border = '3px solid black';
score.style.backgroundColor = 'black';
score.style.color = 'azure';
score.style.display = 'flex';
score.style.flex = '1, 1, auto';
score.style.flexDirection = 'column';
score.style.minHeight = '80px';
score.style.minWidth = '300px';
score.style.maxWidth = '380px';
score.style.alignItems ='center';
score.style.borderRadius = '5px';

let boardtitle = document.querySelector('.boardtitle');
boardtitle.style.fontWeight = 'bold';
boardtitle.style.fontSize = '20px';

let scoreboard = document.querySelector('.scoreboard');
scoreboard.style.border = '4px solid orange';
scoreboard.style.backgroundColor = 'gold';
scoreboard.style.color = 'black'
scoreboard.style.display = 'flex';
scoreboard.style.flexDirection = 'column';
scoreboard.style.minHeight = '50px';
scoreboard.style.minWidth = '200px';
scoreboard.style.justifyContent = 'center';
scoreboard.style.alignItems = 'center';
scoreboard.style.fontWeight = 'bold';
scoreboard.style.fontSize = '20px';

let container2 = document.querySelector('.container2');
container2.style.display = 'flex';
container2.style.padding = '20px';
container2.style.gap = '20px';

let box1 = document.querySelector('.window1');

let box2 = document.querySelector('.window2');

//Detecting button clicks

let rockbtn = document.querySelector('#rockbtn');
rockbtn.style.backgroundColor = 'slategrey';
rockbtn.addEventListener("click", () => playRound('rock')); 

let paperbtn = document.querySelector('#paperbtn');
paperbtn.style.backgroundColor = 'slategrey';
paperbtn.addEventListener("click", () => playRound('paper')); 

let scissorsbtn = document.querySelector('#scissorsbtn');
scissorsbtn.style.backgroundColor = 'slategrey';
scissorsbtn.addEventListener("click", () => playRound('scissors'));

let resetbtn = document.querySelector('#reset');
resetbtn.style.backgroundColor = 'slategrey';
resetbtn.style.fontWeight = 'bold';
resetbtn.style.color = 'white';
resetbtn.style.borderRadius = '5px';
resetbtn.addEventListener("click", () => resetScore());

let gamebtn = document.querySelector('#game');
gamebtn.style.backgroundColor = 'slategrey';
gamebtn.style.fontWeight = 'bold';
gamebtn.style.color = 'white';
gamebtn.style.borderRadius = '5px';
gamebtn.addEventListener("click", () => gameMode());

let gameChoices = [rockbtn, paperbtn, scissorsbtn];
let computerScore = 0;
let userScore = 0;
let winner;

//Game functions
//Reset Score

function resetScore(){
    computerScore = 0;
    userScore = 0;

    box1.textContent = `Computer: ${computerScore}`;
    box2.textContent = `User: ${userScore}`;
    }

//Plays until user or computer reaches 5 points, reports winner and resets score
function gameMode(){
    console.log('Game mode!');
    resetScore();
    const scoreCheckEvent = scoreCheck;
    gameChoices.forEach(btn => {
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
            gameChoices.forEach(btn => {
                btn.removeEventListener(
                    "click", scoreCheckEvent)
            });

        }
    }

//Plays one round of RPS
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
    
//Scorekeeping
    function getScore(winner) {
            if (winner === 'Computer wins!'){++computerScore; 
                return computerScore;}
            else if (winner === 'You win!'){++userScore;
                return userScore;}
            else return;
        }

        compareChoice(userChoice, computerChoice);
        getScore(winner);

//Generates output
        computer.textContent = `Computer chose: ${computerChoice}!`;
        box1.textContent = `Computer: ${computerScore}`;
        box2.textContent = `User: ${userScore}`;
        message.textContent = `${winner}`;
    }
    
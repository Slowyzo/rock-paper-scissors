let body = document.querySelector('body');
body.style.display = 'flex';
body.style.flex = '1, 1, auto';
body.style.flexDirection = 'column';

let box1 = document.querySelector('.window1');
box1.style.border = '2px solid black';

let box2 = document.querySelector('.window2');
box2.style.border = '2px solid black';

let rockbtn = document.querySelector('#rockbtn');
rockbtn.style.backgroundColor = 'yellow';
rockbtn.addEventListener("click", () => playRound('rock')); 

let paperbtn = document.querySelector('#paperbtn');
paperbtn.style.color = 'red';
paperbtn.addEventListener("click", () => playRound('paper')); 

let scissorsbtn = document.querySelector('#scissorsbtn');
scissorsbtn.setAttribute('style', 'color: blue; background: lightBlue;');
scissorsbtn.addEventListener("click", () => playRound('scissors'));

let resetbtn = document.querySelector('#reset');
resetbtn.addEventListener("click", () => resetScore());

let gamebtn = document.querySelector('#game');
gamebtn.addEventListener("click", () => gameMode());


let choiceArray = [rockbtn, paperbtn, scissorsbtn];
let computerScore = 0;
let userScore = 0;

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
    let winner;
    
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
    
        console.log(userChoice);
        console.log(computerChoice);
        compareChoice(userChoice, computerChoice)
        console.log(winner);
        getScore(winner);

        box1.textContent = `Computer: ${computerScore}`;
        box2.textContent = `User: ${userScore}`;
    }
    

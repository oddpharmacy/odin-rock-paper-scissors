// Get rock, paper or scissors from com

function getRan(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    let ranNumber = getRan(1, 3);
    let computerSelection;
    switch (ranNumber) {
        case 1:
            computerSelection = 'ROCK';
            break;
        
        case 2:
            computerSelection = 'PAPER';
            break;
    
        case 3:
            computerSelection = 'SCISSORS';
            break;
    }
    return computerSelection;
}


//  
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');



// Initialize result counts
let comWins = 0;
let plaWins = 0;



function playRound(playerSelection, computerSelection) {
    const result = document.createElement('div');

    if (computerSelection == 'ROCK') {
        switch (true) {
            case (playerSelection == paper):
                result.textContent = "You Win! Paper beats Rock";
                plaWins++;
                break;
            
            case (playerSelection == scissors):
                result.textContent = "You Lose! Rock beats Scissors";
                comWins++;
                break;
            
            case (playerSelection == rock):
                result.textContent = "It's a tie!";
                break;
        }
    }
    else if (computerSelection == 'PAPER') {
        switch (true) {
            case (playerSelection == rock):
                result.textContent = "You Lose! Paper beats Rock";
                comWins++;
                break;
            
            case (playerSelection == scissors):
                result.textContent = "You Win! Scissors beats Paper";
                plaWins++;
                break;

            case (playerSelection == paper):
                result.textContent = "It's a tie!";
                break;
        }
    }
    else if (computerSelection = 'SCISSORS') {
        switch (true) {
            case (playerSelection == rock):
                result.textContent = "You Win! Rock beats Scissors";
                plaWins++;
                break;

            case (playerSelection == paper):
                result.textContent = "You Lose! Scissors beats Paper";
                comWins++;
                break;

            case (playerSelection == scissors):
                result.textContent = "It's a tie!";
                break;
        }
    }
    results.appendChild(result);
}


const buttons = document.querySelectorAll('button');
console.log(buttons)
buttons.forEach((button) => {
    button.addEventListener('click', function clicked() {
        playRound(button, getComputerChoice());
        if (endGame(plaWins, comWins) == true) {
            button.removeEventListener('click', clicked);
        };
        console.log(endGame(plaWins, comWins));
    });
})

const results = document.querySelector('.results');

const runningScore = document.createElement('p');
runningScore.style.color = 'red';

function endGame(plaWins, comWins) {
    if (plaWins >= 5) {  
        runningScore.textContent = 'You are the winner!';
        return true;
    }
    else if (comWins >= 5) {
        runningScore.textContent = 'You are the loser. COM Wins!';
        return true;
    }
}

const container = document.querySelector('.container');
container.appendChild(runningScore)


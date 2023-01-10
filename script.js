// Get rock, paper or scissors from com
function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ranNumber = getComputerChoice(1, 3);
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

//

// Get player input of rock, paper or scissors

let playerSelection = prompt("Choose rock, paper or scissors");

// Check player input 

let checkPlayerSelection = playerSelection.toUpperCase();

switch (true) {
    case (checkPlayerSelection == 'ROCK'):
    case (checkPlayerSelection == 'PAPER'):
    case (checkPlayerSelection == 'SCISSORS'):
        console.log("Player input recorded");
        playerSelection = checkPlayerSelection;
        checkPlayerSelection = true;
        break;
    
    default:
        console.log("Invalid input");
        checkPlayerSelection = false;
        break;
}

// Initialize result counts
let win = 0;
let loss = 0;
let tie = 0;

// Round of rock paper scissors
// console.log("PS" + playerSelection)
// console.log("CS" + computerSelection)

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        console.log("It's a tie!");
        tie++;
    }
    else if (computerSelection == 'ROCK') {
        switch (true) {
            case (playerSelection == 'PAPER'):
                console.log("You Win! Paper beats Rock");
                win++;
                break;
            
            case (playerSelection == 'SCISSORS'):
                console.log("You Lose! Rock beats Scissors");
                lose++;
                break;
        }
    }
    else if (computerSelection == 'PAPER') {
        switch (true) {
            case (playerSelection == 'ROCK'):
                console.log("You Lose! Paper beats Rock");
                lose++;
                break;
            
            case (playerSelection == 'SCISSORS'):
                console.log("You Win! Scissors beats Paper");
                win++;
                break;
        }
    }
    else if (computerSelection = 'SCISSORS') {
        switch (true) {
            case (playerSelection == 'ROCK'):
                console.log("You Win! Rock beats Scissors");
                win++;
                break;

            case (playerSelection == 'PAPER'):
                console.log("You Lose! Scissors beats Paper");
                lose++;
                break;
        }
    }
}

// console.log(playRound(playerSelection, computerSelection));


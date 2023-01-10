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
let comWins = 0;
let plaWins = 0;

// Round of rock paper scissors
// console.log("PS" + playerSelection)
// console.log("CS" + computerSelection)

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        console.log("It's a tie!");
    }
    else if (computerSelection == 'ROCK') {
        switch (true) {
            case (playerSelection == 'PAPER'):
                console.log("You Win! Paper beats Rock");
                plaWins++;
                break;
            
            case (playerSelection == 'SCISSORS'):
                console.log("You Lose! Rock beats Scissors");
                comWins++;
                break;
        }
    }
    else if (computerSelection == 'PAPER') {
        switch (true) {
            case (playerSelection == 'ROCK'):
                console.log("You Lose! Paper beats Rock");
                comWins++;
                break;
            
            case (playerSelection == 'SCISSORS'):
                console.log("You Win! Scissors beats Paper");
                plaWins++;
                break;
        }
    }
    else if (computerSelection = 'SCISSORS') {
        switch (true) {
            case (playerSelection == 'ROCK'):
                console.log("You Win! Rock beats Scissors");
                plaWins++;
                break;

            case (playerSelection == 'PAPER'):
                console.log("You Lose! Scissors beats Paper");
                comWins;
                break;
        }
    }
}

// console.log(playRound(playerSelection, computerSelection));


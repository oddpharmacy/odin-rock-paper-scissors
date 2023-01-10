// Get rock, paper or scissors from com
function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ranNumber = getComputerChoice(1, 3);
let computerSelection;

switch (ranNumber) {
    case 1:
        computerSelection = 'rock';
        break;
    
    case 2:
        computerSelection = 'paper';
        break;

    case 3:
        computerSelection = 'scissors';
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


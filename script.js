function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ranNumber = getComputerChoice(1, 3);

switch (ranNumber) {
    let result;

    case 1:
        result = 'rock';
        break;
    
    case 2:
        result = 'paper';
        break;

    case 3:
        result = 'scissors';
        break;
}

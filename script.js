function getComputerChoice() {
    // Get a random number from 1 to 3
    let randomNumber = Math.floor(Math.random() * 4) + 1

    if(randomNumber === 1) {
        return 'Rock'
    } else if(randomNumber === 2) {
        return 'Paper'
    } else return 'Scissors'
}

function playRound(playerSelection, computerSelection) {
    let playerSel = playerSelection.toUpperCase();
    let computerSel = computerSelection.toUpperCase();

    switch (playerSel) {
        case 'ROCK': 
            switch (computerSel) {
                case 'PAPER':
                    return 'You Lose! Paper beats Rock'
                    break;
                case 'ROCK':
                    return 'It\'s a Tie'
                    break;
                case 'SCISSORS':
                    return 'You Win! Rock beats Scissors'
                    break;
            }
            break;

        case 'PAPER':
            switch (computerSel) {
                case 'SCISSORS':
                    return 'You Lose! Scissors beats Paper'
                    break;
                case 'PAPER':
                    return 'It\'s a Tie'
                    break;
                case 'ROCK':
                    return 'You Win! Paper beats Rock'
                    break;
            }
            break;

        case 'SCISSORS':
            switch (computerSel) {
                case 'ROCK':
                    return 'You Lose! Rocks beats Scissors'
                    break;
                case 'SCISSORS':
                    return 'It\'s a Tie'
                    break;
                case 'PAPER':
                    return 'You Win! Scissors beats Paper'
                    break;
            }
            break;
    }
}

const playerSelection = 'rock'
const computerSelection = 'ScisSors'

console.log(playRound(playerSelection, computerSelection))
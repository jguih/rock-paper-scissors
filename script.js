function getComputerChoice() {
    // Get a random number from 1 to 3
    let randomNumber = Math.floor(Math.random() * 4) + 1

    if(randomNumber === 1) {
        return 'Rock'
    } else if(randomNumber === 2) {
        return 'Paper'
    } else return 'Scissors'
}

// Plays a round and check who won
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

// Select all player buttons
const allPlayerEmojiButtons = document.querySelectorAll('.player-options button')

// Create an h3 node for displaying results
const result = document.createElement('h3')
result.classList.add('result')

// Gets the div that displays the result and append the h3
const match_result = document.querySelector('.match-result')
match_result.appendChild(result)

const handlePlayerEmojiClicks = function() {
    // Gets the data-key from the player's selection
    const playerSelection = this.dataset.key
    // Play a round and update the result
    result.textContent = playRound(playerSelection, getComputerChoice())
    // Gets the span that contains the button's emoji
    const thisButtonEmoji = this.firstChild
    // Highlights the selected emoji
    thisButtonEmoji.classList.remove('emoji')
    thisButtonEmoji.classList.add('player-choice')
    // Make sure that there's only one highlighted emoji
    allPlayerEmojiButtons.forEach(button => {
        // Gets the span that contains the button's emoji
        const buttonEmoji = button.firstChild
        // Check if there are other highlighted emojis
        if (thisButtonEmoji !== buttonEmoji && buttonEmoji.classList.contains('player-choice')) {
            buttonEmoji.classList.remove('player-choice')
            buttonEmoji.classList.add('emoji')
        }
    })
}

allPlayerEmojiButtons.forEach( button => {
    button.addEventListener('click', handlePlayerEmojiClicks) 
})

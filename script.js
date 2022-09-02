function getComputerChoice() {
    // Get a random number from 1 to 3
    let randomNumber = Math.floor(Math.random() * 4) + 1

    if(randomNumber === 1) {
        return 'rock'
    } else if(randomNumber === 2) {
        return 'paper'
    } else return 'scissors'
}

// Plays a round and check who won
function playRound(playerSelection, computerSelection) {
    let playerSel = playerSelection.toUpperCase();
    let computerSel = computerSelection.toUpperCase();

    switch (playerSel) {
        case 'ROCK': 
            switch (computerSel) {
                case 'PAPER':
                    return [-1, 'You Lose! Paper beats Rock']
                    break;
                case 'ROCK':
                    return [0, 'It\'s a Tie']
                    break;
                case 'SCISSORS':
                    return [1, 'You Win! Rock beats Scissors']
                    break;
            }
            break;

        case 'PAPER':
            switch (computerSel) {
                case 'SCISSORS':
                    return [-1, 'You Lose! Scissors beats Paper']
                    break;
                case 'PAPER':
                    return [0, 'It\'s a Tie']
                    break;
                case 'ROCK':
                    return [1, 'You Win! Paper beats Rock']
                    break;
            }
            break;

        case 'SCISSORS':
            switch (computerSel) {
                case 'ROCK':
                    return [-1, 'You Lose! Rocks beats Scissors']
                    break;
                case 'SCISSORS':
                    return [0, 'It\'s a Tie']
                    break;
                case 'PAPER':
                    return [1, 'You Win! Scissors beats Paper']
                    break;
            }
            break;
    }
}

// Select all player buttons
const allPlayerEmojiButtons = document.querySelectorAll('.player-options button')

const handlePlayerEmojiClicks = function() {
    // Gets the player and computer choice
    const playerChoice = this.dataset.key
    const computerChoice = getComputerChoice()
    // Plays the round and stores the match result
    const matchResult = playRound(playerChoice, computerChoice)
    // Gets the span that contains the button's emoji
    const thisButtonEmoji = this.firstChild
    
    showComputerChoice(computerChoice)
    showResult(matchResult[1])
    updateScore(matchResult)

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

// Gets all computer buttons
const allComputerEmojiButtons = document.querySelectorAll('.computer-options button')

function showComputerChoice(computerChoice) {
    allComputerEmojiButtons.forEach(button => {
        // Gets the span child that has the emoji
        const buttonEmoji = button.firstChild
        // Highlights the computer choice
        if((button.dataset.key).toUpperCase() === (computerChoice).toUpperCase()) {
            buttonEmoji.classList.remove('emoji')
            buttonEmoji.classList.add('computer-choice')
        } else if(buttonEmoji.classList.contains('computer-choice')) {
            buttonEmoji.classList.remove('computer-choice')
            buttonEmoji.classList.add('emoji')
        }
    })
}

// Create an h3 node for displaying results
const result = document.createElement('h3')
result.classList.add('result')

// Gets the div that displays the result and append the h3
const match_result = document.querySelector('.match-result')
match_result.appendChild(result)

// Update the h3 that displays the result
function showResult(newResult) {
    result.textContent = newResult
}

// Store computer and player score
let playerScore = 0
let computerScore = 0

// Calculates the score
function score(matchResult) {
    switch(matchResult[0]) {
        case 1:
            playerScore++
            break;
        case 0:
            break;
        case -1:
            computerScore++
            break;
    }
}

const playerScoreNode = document.querySelector('.player-score')
const computerScoreNode = document.querySelector('.computer-score')
// Update the score on screen
function updateScore(matchResult) {
    score(matchResult)
    playerScoreNode.textContent = playerScore
    computerScoreNode.textContent = computerScore

    if(playerScore === 5) {
        confirm('You Won!\nPlayer Score: '+playerScore+'\nComputer Score: '+computerScore)
        resetScore()
    } else if (computerScore === 5) {
        confirm('You Lost!\nPlayer Score: '+playerScore+'\nComputer Score: '+computerScore)
        resetScore()
    }
    
    playerScoreNode.textContent = playerScore
    computerScoreNode.textContent = computerScore
}

function resetScore() {
    playerScore = 0
    computerScore = 0
}